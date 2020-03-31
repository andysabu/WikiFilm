<?php

include '../../_controller/movie-controller.php';

$name = $_GET['name'];
$director = $_GET['director'];
$releasedate = $_GET['release_date'];
$synopsis = $_GET['synopsis'];

echo json_encode(addMovieController($name, $releasedate, $director,  $synopsis));
?>