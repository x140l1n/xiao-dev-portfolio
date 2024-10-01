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

    $firstname = htmlspecialchars($_POST['firstname'], ENT_QUOTES, 'UTF-8');
    $lastname = htmlspecialchars($_POST['lastname'], ENT_QUOTES, 'UTF-8');
    $subject = htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
    $from = filter_input(INPUT_POST, 'from', FILTER_VALIDATE_EMAIL);

    if ($firstname && $lastname && $subject && $message && $from) {
        $headers = [
            "MIME-Version: 1.0",
            "Content-Type: text/plain; charset=UTF-8",
            "From: $from",
            "Reply-To: $from",
            "X-Mailer: PHP/" . phpversion()
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
        http_response_code(422);
        echo json_encode(['status' => -1, 'msg' => 'Hay campos vacíos o inválidos.']);
    }
} else {
    http_response_code(400);
    echo json_encode(['status' => -1, 'msg' => 'Solicitud inválida.']);
}
