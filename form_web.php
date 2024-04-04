<?php

$mailToSend = "t.mianecki@globuslighting.pl";
$email_to = "aztspawacz@aztsp.pl";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["fname"];
  $surName=$_POST["lname"];
  $topic=$_POST["temat"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $pfone = $_POST["phone"];
  $errors =array();
  $return =array();

    if (empty($name)) { //jeżeli pusta wartość
        array_push($errors, "fname");
    }
  if (empty($surName)) { //jeżeli pusta wartość
        array_push($errors, "lname");
    }
  if (empty($topic)) { //jeżeli pusta wartość
        array_push($errors, "temat");
    }
    if (empty($email)) { //sprawdzamy czy email ma zły wzór
        array_push($errors, "email");
    }
    if (empty($message)) {
        array_push($errors, "message");
    }
  if (empty($pfone)){
        array_push($errors, "phone");
  }

    if (count($errors) > 0) {
        $return["errors"] = $errors;
    } else {
        //każde wysłanie wiadomości musi być poprzedzone ustawieniem nagłówków
        $headers  = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type: text/html; charset=UTF-8". "\r\n";
        $headers .= "From: ".$email."\r\n";
        $headers .= "Reply-to: ".$email;
        $message  = "
            <html>
                <head>
                    <meta charset=\"utf-8\">
                </head>
                <body>
                    <div> 
                    <h2>
                    Imię: $name, 
                    Nazwisko:$surName ,
                    Email: <a href=\"mailto:$email\">$email</a>
                    Numer telefonu: $pfone
                    Temat:$topic
                    </h2>
                    </div>
                    <div><h4> Wiadomość:</h4> </div>
                    <div> $message </div>
                </body>
            </html>";

        if (mail($mailToSend, "Wiadomość ze strony - AZTSP(dot)pl  " . date("d-m-Y"), $message, $headers)) {
            $return["status"] = "ok";
        } else {
            $return["status"] = "error";
        }
    }

    //header("Content-Type: application/json");
   // echo "json_encode($return);";
    //echo $return;
    var_dump($errors);
   echo $headers ;
   echo $message ;
}

?>		