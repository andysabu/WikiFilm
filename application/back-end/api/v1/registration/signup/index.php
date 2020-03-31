<?php

include '../../_controller/registration-controller.php';

// Wrapping the data and save it in variables
$firstname = $_GET['firstname'];
$lastname = $_GET['lastname'];
$email = $_GET['email'];
$password = $_GET['password'];

echo json_encode(addMovieController($firstname, $lastname, $email, $password));
?>