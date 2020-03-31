<?php

include '../../_controller/registration-controller.php';

// Wrapping the data and save it in variables

// echo json_encode($_POST);


echo '[{"id":"1","firstname":"Andres","lastname":"Sanz Buezo","email":"andres@andres.com","password":"12345678"}]';

$email = $_GET['email'];
$password = $_GET['password'];

// echo $email . ' ' . $password;

// var_dump($_GET);

// echo json_encode(validateUserController($email, $password));
?>