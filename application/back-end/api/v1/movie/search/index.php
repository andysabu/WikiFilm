<?php

// echo 'PROUT';
include '../../_controller/movie-controller.php';

echo json_encode(searchMovieController($_GET['search']));
?>