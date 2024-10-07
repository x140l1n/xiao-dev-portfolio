<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);

    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['send'])) {
    define('MAILTO', 'info@xiaojl.dev');

    $_POST['from'] = isset($_POST['from']) ? $_POST['from'] : '';
    $_POST['firstname'] = isset($_POST['firstname']) ? $_POST['firstname'] : '';
    $_POST['lastname'] = isset($_POST['lastname']) ? $_POST['lastname'] : '';
    $_POST['subject'] = isset($_POST['subject']) ? $_POST['subject'] : '';
    $_POST['message'] = isset($_POST['message']) ? $_POST['message'] : '';

    if (strlen($_POST['from']) === 0 || strlen($_POST['firstname']) === 0 || strlen($_POST['lastname']) === 0 || strlen($_POST['subject']) === 0 || strlen($_POST['message']) === 0) {
        http_response_code(422);
        echo json_encode(['status' => -1, 'msg' => 'Hay campos vacíos o inválidos.']);

        exit();
    }

    $firstname = htmlspecialchars($firstname, ENT_QUOTES, 'UTF-8');
    $lastname = htmlspecialchars($lastname, ENT_QUOTES, 'UTF-8');
    $subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    if (!($from = filter_input(INPUT_POST, $from, FILTER_VALIDATE_EMAIL))) {
        http_response_code(422);
        echo json_encode(['status' => -1, 'msg' => 'El correo electrónico no es válido.']);

        exit();
    }

    $headers = [
        "MIME-Version: 1.0",
        "Content-Type: text/plain; charset=UTF-8",
        "From: $from",
        "Reply-To: $from",
        "X-Mailer: PHP" . phpversion()
    ];

    $body = "Nombre: $firstname\r\n";
    $body .= "Apellidos: $lastname\r\n";
    $body .= "Mensaje: " . mb_convert_encoding($message, 'UTF-8', 'auto');

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
