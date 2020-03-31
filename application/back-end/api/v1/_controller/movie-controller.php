<?php

include '../../_dao/movie-dao.php';

/**
 * - This function will get all the movies.
 * - No validations are required.
 */
function getAllMoviesController() {
    return getAllMoviesDAO();
}

function searchMovieController($search){
    return searchMovieDAO($search);
    // return '5';
}

function addMovieController($name, $releasedate, $director, $synopsis){
    // ADD VALIDATIONS
    //check on firstname:
    $okName = strlen($name) >= 1;

    //check the synopsis:
    $okSynopsis = strlen($synopsis) >= 20;

    //check director:
    $okDirector = strlen($director) >= 2;

    //Check release Date
    $okDate = true;
    // checkdate($releasedate);


    // All OK --> INSERT user in database
    if ($okName && $okSynopsis && $okDirector && $okDate) {
        // Hass the password to be encrypted....
        return addMovieDAO($name, $releasedate, $director, $synopsis);
    } else {
        return false;
    }
}

function getMoviesByDateController(){
    return getMoviesByDate();
}

?>