<?php 
header("Content-Type: application/json; charset=utf-8");

define("MAILTO", "x140l1n@hotmail.com");

if (isset($_GET['send'])) {
    $to = MAILTO;
    $firstname = $_GET['firstname'];
    $lastname = $_GET['lastname'];
    $subject = $_GET['subject'];
    $message = $_GET['message'];
    $from = $_GET['from'];

    $headers = "From: " . $from;
    
    $message =  "Nombre: " . $firstname . "\r\n" .
                "Apellidos: " . $lastname . "\r\n" . 
                "Mensaje: " . $message;

    if ($firstname && $lastname && $subject && $message && $from) {
        if (@mail($to, $subject, $message, $headers)) {
            echo json_encode(array('status' => 1, 'msg' => 'Enviado correctamente. Gracias por contactarme :)'));
        } else {
            echo json_encode(array('status' => 0, 'msg' => 'Error al enviar el mensaje.'));
        }
    } else {
        echo json_encode(array('status' => -1, 'msg' => 'Hay campos vacíos.'));
    }
} else {
    echo json_encode(array('status' => -1, 'msg' => 'Hay campos vacíos.'));
}

?>