<?php

include 'base-dao.php';

/**
 * This function will return all the movies from the database
 */
function getAllUsersDAO(){
    $table = 'user';
    $statement = '';

    $results = doSelect($table, $statement);

    $movies = array();
    while ($row = mysqli_fetch_assoc($results)) {
        array_push($movies, $row);
    } 

    return $movies;    
}

/**
 * This function will save the new user in the database
 * @param string $firstname the name of the user
 * @param string $lastname the family name of the user
 * @param string $email the valid and unique email for the user 
 * @param string $password the encrypted password the user entered
 */
function addNewUser($firstname, $lastname, $email, $password){
    $table = 'user';
    $columns = array("firstname", "lastname", "email", "password");
    $values = array($firstname, $lastname, $email, $password);

    $results = doInsert($table, $columns, $values);

    return $results;
}
?>