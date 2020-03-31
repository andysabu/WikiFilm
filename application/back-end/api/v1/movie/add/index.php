<?php

include '../../_controller/movie-controller.php';

var_dump($_GET);

$name = $_GET['name'];
$director = $_GET['director'];
$releasedate = $_GET['release_date'];
$synopsis = $_GET['synopsis'];

echo json_encode(addMovieController($firstname, $lastname, $email, $password));
?>