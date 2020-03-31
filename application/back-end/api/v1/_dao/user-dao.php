<?php

include 'base-dao.php';

/**
 * This function will return all the movies from the database
 */
function getAllUsersDAO(){
    $table = 'user';
    $statement = '';

    $results = doSelect($table, $statement);

    $users = array();
    while ($row = mysqli_fetch_assoc($results)) {
        array_push($users, $row);
    } 

    return $users;    
}

?>