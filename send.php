<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    
    
    
    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $tel = htmlspecialchars($tel);
    
    
    $name = urldecode($name);
    $email = urldecode($email);
    $tel = urldecode($tel);
    
    
    $name = trim($name);
    $email = trim($email);
    $tel = trim($tel);
    
    
    
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