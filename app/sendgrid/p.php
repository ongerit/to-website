<?php
// Not using composer
require("sendgrid-php/sendgrid-php.php");
require("cred.php");

  // if(isset($_POST[send])) {
	// User information
	$user_email = $_POST[email];
	$user_name = $_POST[name];
	$user_message = $_POST[message];


	// SendGrid Information
	$to = new SendGrid\Email(null, SG_EMAIL);
	$from = new SendGrid\Email(null, $user_email);
	$subject = "From: ".$user_name." on thomasongeri.com";
	$content = new SendGrid\Content("text/plain", $user_message);
	$mail = new SendGrid\Mail($from, $subject,$to,$content);

	$apiKey = SG_API_KEY;
	$sg = new \SendGrid($apiKey);

	$response = $sg->client->mail()->send()->post($mail);

	// TESTING
	// echo $response->statusCode().'<br/>';
	// print_r($response->headers()).'<br/>';
	// print $response->body();
