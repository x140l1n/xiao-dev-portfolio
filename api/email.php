<?php

header('Content-Type: application/json; charset=utf-8');

error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED & ~E_STRICT);

ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/../logs/error.log');

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['send'])) {
    define('MAILTO', 'info@xiaojl.dev');

    $from = isset($_POST['from']) ? $_POST['from'] : '';
    $firstname = isset($_POST['firstname']) ? $_POST['firstname'] : '';
    $lastname = isset($_POST['lastname']) ? $_POST['lastname'] : '';
    $subject = isset($_POST['subject']) ? $_POST['subject'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    if (strlen($from) === 0 || strlen($firstname) === 0 || strlen($lastname) === 0 || strlen($subject) === 0 || strlen($message) === 0) {
        http_response_code(422);

        echo json_encode(['status' => -1, 'msg' => 'Hay campos vacíos.']);

        exit();
    }

    if (!($from = filter_var($from, FILTER_VALIDATE_EMAIL))) {
        http_response_code(422);

        echo json_encode(['status' => -1, 'msg' => 'El correo electrónico no es válido.']);

        exit();
    }

    $message = mb_convert_encoding($message, 'UTF-8', 'auto');

    $headers = [
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=UTF-8",
        "From: $from",
        "Reply-To: $from",
        "X-Mailer: PHP" . phpversion()
    ];

    $body = "Firstname: $firstname\r\n";
    $body .= "Lastname: $lastname\r\n";
    $body .= "Message: " . $message;
    $body .= "\r\n\r\n";
    $body .= "This message was sent from the website '" . $_SERVER['HTTP_HOST'] . "'.";

    if (@mail(MAILTO, $subject, $body, implode("\r\n", $headers))) {
        http_response_code(200);

        echo json_encode(['status' => 1, 'msg' => 'Enviado correctamente. Gracias por contactarme 😊.'], JSON_UNESCAPED_UNICODE);
    } else {
        http_response_code(500);

        echo json_encode(['status' => 0, 'msg' => 'Error al enviar el mensaje.']);
    }
} else {
    http_response_code(400);

    echo json_encode(['status' => -1, 'msg' => 'Solicitud inválida.']);
}
