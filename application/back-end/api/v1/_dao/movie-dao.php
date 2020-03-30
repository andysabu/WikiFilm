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

?>