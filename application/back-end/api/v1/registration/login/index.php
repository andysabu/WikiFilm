<?php

include '../../_controller/registration-controller.php';

// Wrapping the data and save it in variables

// echo json_encode($_POST);


// echo '[{"id":"1","firstname":"Andres","lastname":"Sanz Buezo","email":"andres@andres.com","password":"12345678"}]';

$email = $_POST['email'];
$password = $_POST['password'];

echo $email . ' ' . $password;

var_dump($_POST);

// echo json_encode(validateUserController($email, $password));
?>