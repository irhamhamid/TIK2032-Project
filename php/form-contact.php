<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $host = 'localhost';
    $user = 'root';
    $pass = 'wibu12345';
    $dbname = 'portofolio';
    $port = 3306;

    $conn = mysqli_connect($host, $user, $pass, $dbname, $port);
    if (!$conn) {
        die("Database tidak terhubung");
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $query = "INSERT INTO contact (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";
    if (mysqli_query($conn, $query)) {
        echo "<script>
        alert('Pesan Sukses Terkirim, Terimakasih :)');
        window.location.href = 'contact.html';
      </script>";
    } else {
        $alertMessage = "Terjadi kesalahan, pesan tidak terkirim";
        header('Location:contact.html');
    }

    mysqli_close($conn);
}