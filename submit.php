<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $date = date("Y-m-d H:i:s");
    $data="Date: $date\nEmail: $email\nMessage: $message\n-----------------------\n";

    $file='submissions.txt';
     if(file_put_contents($file, $data, FILE_APPEND)){
        echo "<p style='color:green;'>Thank You! Your message has been saved.</p>";
     }
     else{
        echo "<p style='color: red;'>Error: Could not save your message.</p>";        
     }
}
?>
