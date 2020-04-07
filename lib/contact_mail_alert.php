//<?php
//class ContactMailAlert
//  {
//
//    $visitor_name = $_POST['name'];
//    $visitor_email = $_POST['email'];
//    $message = $_POST['message'];
//
//
//    $email_from = "iamneil03@gmail.com";
//
//    $email_subject = "IAMNEIL09's Form Submission";
//
//    $email_body = "User Name: $visitor_name. \n".
//                    "User Email: $visitor_email. \n".
//                        "User Message: $message. \n";
//
//    $to = "iamneil03@gmail.com";
//
//    $headers = "From: $email_from \r\n";
//
//    $headers .= "Reply-To: $visitor_email \r\n";
//
//    if(mail($to,$email_subject,$email_body,$headers)){
//        $message = "Your contact information is received successfully.";
//        $type = "success";
//        header('Location: contact-form-response.html');
//    }
//
//    echo "Error Occured. Please Try again!"
//  }
//?>