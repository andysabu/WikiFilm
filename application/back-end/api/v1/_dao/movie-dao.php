<?php

include 'base-dao.php';

/**
 * This function will return all the movies from the database
 */
function getAllMoviesDAO(){
    $table = 'movie';
    $statement = '';

    $results = doSelect($table, $statement);

    $movies = array();
    while ($row = mysqli_fetch_assoc($results)) {
        array_push($movies, $row);
    } 

    return $movies;    
}

function addMovieDAO($name, $releasedate, $director, $synopsis){
    $table = 'movie';
    $columns = array("firstname", "lastname", "email", "password");
    $values = array($name, $releasedate, $director, $synopsis);

    $results = doInsert($table, $columns, $values);

    return $results;
}

?>