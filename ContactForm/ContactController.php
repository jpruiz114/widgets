<?php
require_once "library/autoload.php";

// Get the list of email addresses.
$emailList = $_POST["emailList"];

// Get the email subject.
$subject = $_POST["subject"];

// Get the email message.
$message = $_POST["message"];

// Create a new mandrill instance with the api key.
$mandrill = new Mandrill("mn2dUPYU9HebzLC4q3_NXQ");

// Convert the string of addresses to an array.
$listOfEmailAddresses = explode(",", $emailList);

for ($i=0; $i<sizeof($listOfEmailAddresses); $i++) {
    $currentEmailAddress = $listOfEmailAddresses[$i];

    $messageObject = array(
        "subject" => $subject,
        "from_email" => "jpruiz114@gmail.com",
        "to" => array(array("email" => $currentEmailAddress, "name" => "Unknown")),
        "merge_vars" => array(
            array(
                "rcpt" => $currentEmailAddress,
                "vars" => array(array("name" => "MESSAGE", "content" => $message))
            )
        )
    );

    $template_name = "contact-form-email-template";

    $template_content = array(array("name" => "MESSAGE", "content" => $message));

    $mandrillResponse = $mandrill->messages->sendTemplate($template_name, $template_content, $messageObject);
}

$result = array("success" => "1");

echo json_encode($result);
