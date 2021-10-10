<?php

$to = "m.bradac.michal@gmail.com";
$subject = $_POST["inputsubject"];
$message = $_POST["inputmessage"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["inputemail"];
$headers =      'From: montana@alter.cz'           . "\r\n" .
                'Reply-To: ' + $email              . "\r\n" .
                'X-Mailer: PHP/'                   . phpversion();


$body = "Od: " + $firstname + " " + $lastname + " <" + $email + ">\n" + $message;

if (mail($to, $subject, $body, $headers)){
        http_response_code(200);
        return;
}

http_response_code(500);
?>
