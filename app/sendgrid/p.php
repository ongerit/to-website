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
	// SendGrid Information
  function send_grid_information($apiKey, $sgEmail,$user_email, $user_last_name, $user_first_name, $user_message) {
    $to = new SendGrid\Email(null, $sgEmail);
    $from = new SendGrid\Email(null, $user_email);
    $subject = "From: ".$user_first_name." ".$user_last_name." on thomasongeri.com";
    $content = new SendGrid\Content("text/plain", $user_message);
    $mail = new SendGrid\Mail($from, $subject,$to,$content);

    $sg = new \SendGrid($apiKey);

    $response = $sg->client->mail()->send()->post($mail);
  }

  // Add user's contant information to sendgrid

  function add_users_contact_to_sendgrid($apiKey, $user_email, $user_last_name, $user_first_name) {
    //$data  = array("email" => $user_email, "last_name" => $user_last_name, "first_name" => $user_first_name);

		$data  = '[{"email":'.$user_email.',"last_name":'.$user_last_name.',"first_name":'.$user_first_name.'}]';
		$data_string = json_encode($data);

    $ch = curl_init('https://api.sendgrid.com/v3/contactdb/recipients');
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string_obj);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Authorization: Bearer'.$apiKey
      )
    );
    $result = curl_exec($ch);
	//	print('add_users_contact_to_sendgrid_print: '.$user_email.$user_last_name.$user_first_name);
  //  print('sendgrid: '.$ch);
		print('raw: '.$data);
		print('sendgrid: '.$data_string);
  }

	// Add user to sendgrid contacts

	//POST https://api.sendgrid.com/v3/contactdb/recipients HTTP/1.1
	//http://stackoverflow.com/questions/6213509/send-json-post-using-php
			//
			// $options = array(
			//   'http' => array(
			//     'method'  => 'POST',
			//     'content' => json_encode( $data ),
			//     'header'=>  "Content-Type: application/json\r\n" .
			//                 "Accept: application/json\r\n"
			//     )
			// );
			//
			// $context  = stream_context_create( $options );
			// $result = file_get_contents( $url, false, $context );
			// $response = json_decode( $result );

      // 		curl --request POST \
      // --url https://api.sendgrid.com/v3/mail/send \
      // --header 'authorization: Bearer YOUR_API_KEY_GOES_HERE' \
      // --data '{"personalizations":[{"to":["recipient@example.com"]}],"from":"sender@example.com","subject":"Hello, World!","content":[{"type":"string","value":"Heya!"}]}'

      // [{"email": "jones@example.com","first_name": "Jones","last_name": "Jones",}]
      // http://lornajane.net/posts/2011/posting-json-data-with-php-curl

      //curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string_obj);

		//https://api.sendgrid.com/v3/mail/send

		// Send mail
				//
				// 		{
				//   "personalizations": [
				//     {
				//       "to": [
				//         {
				//           "email": "john@example.com"
				//         }
				//       ],
				//       "subject": "Hello, World!"
				//     }
				//   ],
				//   "from": {
				//     "email": "from_address@example.com"
				//   },
				//   "content": [
				//     {
				//       "type": "text/plain",
				//       "value": "Hello, World!"
				//     }
				//   ]
				// }

				// Send mail with the template

				function send_email_with_template($apiKey, $user_email, $user_last_name, $user_first_name, $sgEmail){
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
									    "email": "ongerit@gmail.com"
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
					curl_setopt($ch, CURLOPT_HTTPHEADER, array(
							'Content-Type: application/json',
							'Authorization: Bearer'.$apiKey
						)
					);
					$result = curl_exec($ch);
				}


		// Run Functions here
		send_grid_information($apiKey, $sgEmail,$user_email, $user_last_name, $user_first_name, $user_message);
		add_users_contact_to_sendgrid($apiKey, $user_email, $user_last_name, $user_first_name);
		send_email_with_template($apiKey, $user_email, $user_last_name, $user_first_name, $sgEmail);


?>
