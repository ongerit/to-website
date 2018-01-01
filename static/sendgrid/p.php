<?php
	// Not using composer
	require("sendgrid-php/sendgrid-php.php");
	require("cred.php");
  // User information
  $user_email = $_POST[email];
  $user_first_name = $_POST[fname];
  $user_last_name = $_POST[lname];
  $user_message = $_POST[message];
  $apiKey = SG_API_KEY;
  $sgEmail = SG_EMAIL;
	//[TO] Send transactional Email
  function send_transactional_email($apiKey, $sgEmail, $user_email, $user_last_name, $user_first_name, $user_message) {
      $from = new SendGrid\Email(null, $sgEmail);
      $subject = "Thank You";
      $to = new SendGrid\Email(null, $user_email);
      $content = new SendGrid\Content("text/html", "I will contact you<strong>very soon!</strong>");
      $mail = new SendGrid\Mail($from, $subject, $to, $content);
      $mail->personalization[0]->addSubstitution("-name-", "Thomas Ongeri");
      $mail->personalization[0]->addSubstitution("-city-", "Denver");
      $mail->setTemplateId("b341737b-582f-4ade-906f-df0da51a13c3");

      $sg = new \SendGrid($apiKey);

      try {
          $response = $sg->client->mail()->send()->post($mail);
      } catch (Exception $e) {
          echo 'Caught exception: ',  $e->getMessage(), "\n";
      }

      echo $response->statusCode();
      echo $response->headers();
      echo $response->body();
  }
  // SendGrid Information
  function send_grid_information($apiKey, $sgEmail, $user_email, $user_last_name, $user_first_name, $user_message) {
      $to = new SendGrid\Email(null, $sgEmail);
      $from = new SendGrid\Email(null, $user_email);
      $subject = "From: ".$user_first_name." ".$user_last_name." on thomasongeri.com";
      $content = new SendGrid\Content("text/plain", $user_message);
      $mail = new SendGrid\Mail($from, $subject, $to, $content);
      $sg = new \SendGrid($apiKey);
      $response = $sg->client->mail()->send()->post($mail);
  }
  // Add user's contant information to sendgrid
  function add_users_contact_to_sendgrid($apiKey, $user_email, $user_last_name, $user_first_name) {
      $data  = '[{"email":"'.$user_email.'","last_name":"'.$user_last_name.'","first_name":"'.$user_first_name.'"}]';
      $data_string = json_encode($data);
      // From postman
      $curl = curl_init();
      $newApiKey = " Bearer ".$apiKey;
      curl_setopt_array($curl, array(
          CURLOPT_URL => "https://api.sendgrid.com/v3/contactdb/recipients",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS => $data,
          CURLOPT_HTTPHEADER => array(
            "authorization:".$newApiKey,
            "cache-control: no-cache",
            "content-type: application/json"
          ),
        ));

      $response = curl_exec($curl);
      $err = curl_error($curl);

      curl_close($curl);

      if ($err) {
          echo "cURL Error #:" . $err;
      } else {
          echo $response;
      }
  }
  // Add user to sendgrid contacts
  // Send mail with the template
  function send_email_with_template($apiKey, $user_email, $user_last_name, $user_first_name, $sgEmail) {
      $data  = '{"personalizations": [
		    {
		      "to": [
		        {
		          "email": "'.$user_email.'"
		        }
		      ],
		      "subject": "Hello, World!"
		    }
		  ],
		  "from": {
		    "email": "'.$user_email.'"
		  },
		  "content": [
		    {
		      "type": "text/plain",
		      "value": "Hello, World!"
		    }
		  ]
		}';

    $data_string = json_encode($data);
    $ch = curl_init('https://api.sendgrid.com/v3/mail/send');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt(
        $ch,
        CURLOPT_HTTPHEADER,
        array(
            'Content-Type: application/json',
            'Authorization: Bearer'.$apiKey
        )
    );
    $resp = curl_exec($ch);
    // Close curl
    curl_close($ch);
  }
	// Run Functions here
	send_grid_information($apiKey, $sgEmail, $user_email, $user_last_name, $user_first_name, $user_message);
	add_users_contact_to_sendgrid($apiKey, $user_email, $user_last_name, $user_first_name);
	send_email_with_template($apiKey, $user_email, $user_last_name, $user_first_name, $sgEmail);
	send_transactional_email($apiKey, $sgEmail, $user_email, $user_last_name, $user_first_name, $user_message);
?>
