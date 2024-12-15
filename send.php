<?php

    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    
    
    $name = htmlspecialchars($name);
    $tel = htmlspecialchars($tel);
    $email = htmlspecialchars($email);
    
    $name = urldecode($name);
    $tel = urldecode($tel);
    $email = urldecode($email);
    
    $name = trim($name);
    $tel = trim($tel);
    $email = trim($email);
    
    
    if(mail("bogdanpav2289@gmail.com",
        "Нове повідомлення",
        "Ім’я: ".$name."\n".
        "email: ".$email."\n".
        "Телефон: ".$tel,
        "From: no-reply@mydomain.ru \r\n")
    ){
    echo ('Лист успішно надіслано!');
    } 
    else {
        echo ('Є помилки! Перевірте дані...');
    }
?>