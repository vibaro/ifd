<?php
    $email="";
    $head = "From: " . $_POST['email'];
    $headers = "Content-Type: text/html; charset=UTF-8";
    $title= "Contato - " . $_POST['nome'];
    $body = $_POST['mensagem'];
    $success = mail($email, $title, $body, $head);
?>