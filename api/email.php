<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

if (isset($_POST['send'])) {
    define('MAILTO', 'info@xiaojl.dev');

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $from = $_POST['from'];
    if ($firstname && $lastname && $subject && $message && $from) {
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
        $headers .= "From: nombre@dominio.com\r\n";
        $headers .= "Reply-To: nombre@dominio.com\r\n";
        $headers .= "X-Mailer: PHP/" . phpversion();

        $body .= "Nombre: $firstname\r\n";
        $body .= "Apellidos: $lastname\r\n";
        $body .= "Mensaje: $message";

        if (@mail(MAILTO, $subject, $message, $headers)) {
            http_response_code(200);
            echo json_encode(array('status' => 1, 'msg' => 'Enviado correctamente. Gracias por contactarme :)'));
        } else {
            http_response_code(500);
            echo json_encode(array('status' => 0, 'msg' => 'Error al enviar el mensaje.'));
        }
    } else {
        http_response_code(400);
        echo json_encode(array('status' => -1, 'msg' => 'Hay campos vacíos.'));
    }
} else {
    http_response_code(400);
    echo json_encode(array('status' => -1, 'msg' => 'Hay campos vacíos.'));
}
