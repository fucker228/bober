<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$phone = $_POST["phone"];

$EmailTo = "jasonmayrs@gmail.com";
$Subject = "Новое сообщение с сайта";
 

$Body .= "Имя: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Телефон: ";
$Body .= $phone;
$Body .= "\n";
 

$success = mail($EmailTo, $Subject, $Body);
 

if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>