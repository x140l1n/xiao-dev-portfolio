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

    $headers = 'From: ' . $from;
    
    $message =  'Nombre: ' . $firstname . '\r\n' .
                'Apellidos: ' . $lastname . '\r\n' . 
                'Mensaje: ' . $message;

    if ($firstname && $lastname && $subject && $message && $from) {
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