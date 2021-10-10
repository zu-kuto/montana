<?php

$to = "m.bradac.michal@gmail.com";
$subject = $_POST["inputsubject"];
$message = $_POST["inputmessage"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["inputemail"]

$body = "Od: " + $firstname + " " + $lastname + " <" + $email + ">\n" + $message

if (@mail($to, $subject, $body, $headers)):
        http_response_code(200);
        return;
else:
        http_response_code(500);
        return;
endif;

?>
