<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nume = htmlspecialchars($_POST['nume']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mesaj = htmlspecialchars($_POST['mesaj']);

    $to = "daniella.cafe24@gamil.com"; 
    $subject = "Mesaj nou de pe site";
    $message = "Nume: $nume\nEmail: $email\n\nMesaj:\n$mesaj";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $message, $headers)) {
        echo "Mesaj trimis cu succes!";
    } else {
        echo "Eroare la trimiterea mesajului.";
    }
} else {
    echo "Acces interzis!";
}
?>