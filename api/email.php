<?php

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/vendor/autoload.php';

use Dotenv\Dotenv;
use Monolog\Logger;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use Monolog\Processor\UidProcessor;
use Monolog\Handler\RotatingFileHandler;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

error_reporting($_ENV['APP_ENV'] === 'local' ? E_ALL : E_ERROR & ~E_DEPRECATED & ~E_STRICT & ~E_NOTICE);

ini_set('display_errors', 0);

// CORS headers - allow all origins since API returns no sensitive data
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	http_response_code(204);
	exit();
}

const RESPONSES = [
    'success' => [
        'status' => 1,
        'message' => 'Sent successfully. Thank you for contacting me! 😊',
        'http_code' => 200
    ],
    'error' => [
        'status' => 0,
        'message' => 'Error sending the message.',
        'http_code' => 500
    ],
    'empty' => [
        'status' => -1,
        'message' => 'There are empty fields.',
        'http_code' => 422
    ],
    'invalid_email' => [
        'status' => -1,
        'message' => 'The email is invalid.',
        'http_code' => 422
    ],
    'invalid_recaptcha' => [
        'status' => -1,
        'message' => 'The reCAPTCHA is invalid.',
        'http_code' => 422
    ],
    'recaptcha_not_completed' => [
        'status' => -1,
        'message' => 'The reCAPTCHA has not been completed.',
        'http_code' => 422
    ],
    'invalid_request' => [
        'status' => -1,
        'message' => 'Invalid request.',
        'http_code' => 400
    ]
];

$settings_logger = [
    'name' => $_ENV['APP_NAME'],
    'path' => __DIR__ . '/logs/app.log',
    'maxFiles' => 5,
    'level' => $_ENV['APP_ENV'] === 'local' ? Logger::DEBUG : Logger::ERROR
];

$GLOBALS['logger'] = new Logger($settings_logger['name']);
$GLOBALS['logger']->pushProcessor(new UidProcessor());
$GLOBALS['logger']->pushHandler(new RotatingFileHandler($settings_logger['path'], $settings_logger['maxFiles'], $settings_logger['level']));

set_error_handler(function($errno, $errstr, $errfile, $errline) {
	return handleErrorException($errno, 'From error handler: ' . $errstr, $errfile, $errline);
});

set_exception_handler(function($exception) {
	return handleErrorException($exception->getCode(), 'From exception handler: ' . $exception->getMessage(), $exception->getFile(), $exception->getLine());
});

function handleErrorException($errno, $errstr, $errfile, $errline)
{
	while (ob_get_level()) {
		ob_end_clean();
	}

    $GLOBALS['logger']->error('Error: ' . $errstr, ['file' => $errfile, 'line' => $errline]);
    
    http_response_code(RESPONSES['error']['http_code']);

    echo json_encode(RESPONSES['error'], JSON_UNESCAPED_UNICODE);

    exit();
}

$response = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['send'])) {
    $response = sendEmail();
} else {
    $response = RESPONSES['invalid_request'];
}

/**
 * Send an email.
 * 
 * @return array<string, mixed>
 */
function sendEmail(): array
{
    $from = $_POST['from'] ?? '';
    $firstname = $_POST['firstname'] ?? '';
    $lastname = $_POST['lastname'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';
    $g_recaptcha_response = $_POST['g-recaptcha-response'] ?? '';

    if (!strlen($from) || !strlen($firstname) || !strlen($lastname) || !strlen($subject) || !strlen($message)) {
        return RESPONSES['empty'];
    }

    if (!($from = filter_var($from, FILTER_VALIDATE_EMAIL))) {
        return RESPONSES['invalid_email'];
    }

    if (!strlen($g_recaptcha_response)) {
        return RESPONSES['recaptcha_not_completed'];
    }

    $recaptcha_url = $_ENV['RECAPTCHA_URL_VERIFY'];
    $recaptcha_secret = $_ENV['RECAPTCHA_V3_SECRET_KEY'];

    $recaptcha_url = $recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $g_recaptcha_response;
    
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $recaptcha_url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

    $recaptcha_response = curl_exec($ch);

    curl_close($ch);

    $recaptcha = json_decode($recaptcha_response);

    if (!$recaptcha->success) {
        return RESPONSES['invalid_recaptcha'];
    }

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->SMTPDebug = SMTP::DEBUG_OFF;
        $mail->Host = $_ENV['CONTACT_MAIL_HOST'];
        $mail->SMTPAuth = $_ENV['CONTACT_MAIL_AUTH'];
        $mail->Username = $_ENV['CONTACT_MAIL_FROM'];
        $mail->Password = $_ENV['CONTACT_MAIL_PASSWORD'];
        $mail->SMTPSecure = $_ENV['CONTACT_MAIL_SECURE'];
        $mail->Port = $_ENV['CONTACT_MAIL_PORT'];
        $mail->CharSet = 'UTF-8';
        $mail->isHTML(true);
        $mail->setFrom($_ENV['CONTACT_MAIL_FROM'], $_ENV['APP_NAME']);

        foreach (explode(';', $_ENV['CONTACT_MAIL_TO']) as $email) {
            $mail->addAddress($email);
        }

        $mail->Subject = $subject;
        $mail->Body = '
            <html>
            <body>
                <p style=\'font-family: Arial, sans-serif; font-size: 14px;\'><strong>First name:</strong><br>' . $firstname . '</p>
                <p style=\'font-family: Arial, sans-serif; font-size: 14px;\'><strong>Last name:</strong><br>' . $lastname . '</p>
                <p style=\'font-family: Arial, sans-serif; font-size: 14px;\'><strong>Email:</strong><br>' . $from . '</p>
                <p style=\'font-family: Arial, sans-serif; font-size: 14px;\'><strong>Message:</strong><br>' . nl2br(mb_convert_encoding($message, 'UTF-8', 'auto')) . '</p>
                <p style=\'font-family: Arial, sans-serif; font-size: 14px;\'><em>This message was sent from the website \'<a href=\'' . $_SERVER['HTTP_HOST'] . '\'>' . $_SERVER['HTTP_HOST'] . '</a>\'.</em></p>
            </body>
            </html>
        ';

        if (!$mail->send()) {
            throw new Exception($mail->ErrorInfo);
        }
    } catch (Exception $e) {
        $GLOBALS['logger']->error('Error: ' . $e->getMessage());
    
        return RESPONSES['error'];
    }

    return RESPONSES['success'];
}

http_response_code($response['http_code']);

echo json_encode($response, JSON_UNESCAPED_UNICODE);