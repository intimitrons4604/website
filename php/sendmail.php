<?php

/**
 * PHPMailer simple contact form
 */

use PHPMailer\PHPMailer\PHPMailer;
require './PHPMailer.php';
require './Exception.php';

$failure = false;
$result = '';
$email = '';

//Apply some basic validation and filtering to the query
if (array_key_exists('message', $_POST)) {
	//Limit length and strip HTML tags
	$message = substr(strip_tags($_POST['message']), 0, 16384);
} else {
	$message = '';
}

//Apply some basic validation and filtering to the name
if (array_key_exists('firstName', $_POST)) {
	//Limit length and strip HTML tags
	$firstname = substr(strip_tags($_POST['firstName']), 0, 255);
	$name = $firstname;
} else {
	$name = '';
}
if (array_key_exists('lastName', $_POST)) {
	//Limit length and strip HTML tags
	$lastname = substr(strip_tags($_POST['lastName']), 0, 255);
	if (empty($name)) { 
		$name = $lastname;
	} else {
		$name = $name . ' ' . $lastname;
	}
}
if(empty($name)) { $name = "unset"; }

//Make sure the address they provided is valid before trying to use it
if (array_key_exists('email', $_POST) and PHPMailer::validateAddress($_POST['email'])) {
	$email = $_POST['email'];
} else {
	$result .= "Error: invalid email address provided " . $_POST['email'];
	$failure = true;
}

//send the mail
if (!$failure) {
	$mail = new PHPMailer;
	$mail->isSendmail();
	$mail->isHTML();
	$mail->CharSet = 'utf-8';
	//It's important not to use the submitter's address as the from address as it's forgery,
	//which will cause your messages to fail SPF checks.
	//Use an address in your own domain as the from address, put the submitter's address in a reply-to
	$mail->setFrom('info@intimitrons.ca', 'Website Contact Form');
	$mail->addAddress('info@intimitrons.ca');
	$mail->addReplyTo($email, $name);
	$mail->Subject = 'Contact form inquiry from ' . $name;
	$mail->Body = 'Contact form submission<br><br>Name: '. $name .'<br>Email: '. $email .'<br><br>'. $message;
	if (!$mail->send()) {
		$result .= "Mailer Error: " . $mail->ErrorInfo;
		$failure = true;
	} else {
		$result .= "Message sent!";
	}
}

$response_array['status'] = ($failure ? 'failure' : 'success'); 
$response_array['message'] = $result; 
header('Content-type: application/json');
echo json_encode($response_array);

?>

