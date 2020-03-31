<?php

include 'base-dao.php';

/**
 * This function will return all the movies from the database
 */
function getAllUsers(){
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

/**
 * This function will get only one user if the email matches (email is UNIQUE).
 * @param string $email the valid and unique email for the user 
 * @return user 
 */
function getUserByEmail($email){
    $table = 'user';
    $statement = 'WHERE email LIKE "' . $email . '"';

    $results = doSelect($table, $statement);

    $user = mysqli_fetch_assoc($results);

    return $user;  
}
?>