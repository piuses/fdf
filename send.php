<?php

    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $problem = $_POST['problem'];
    
    
    $name = htmlspecialchars($name);
    $tel = htmlspecialchars($tel);
    $problem = htmlspecialchars($problem);
    
    $name = urldecode($name);
    $tel = urldecode($tel);
    $problem = urldecode($problem);
    
    $name = trim($name);
    $tel = trim($tel);
    $problem = trim($problem);
    
    
    if(mail("bogdanpav2289@gmail.com",
        "Нове повідомлення",
        "Ім’я: ".$name."\n".
        "Проблема: ".$problem."\n".
        "Телефон: ".$tel,
        "From: no-reply@mydomain.com \r\n")
    ){
    echo ('Лист успішно надіслано!');
    } 
    else {
        echo ('Є помилки! Перевірте дані...');
    }
?>