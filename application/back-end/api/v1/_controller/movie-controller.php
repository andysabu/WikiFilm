<?php

include '../../_dao/movie-dao.php';

/**
 * - This function will get all the movies.
 * - No validations are required.
 */
function getAllMoviesController() {
    return getAllMoviesDAO();
}

?>