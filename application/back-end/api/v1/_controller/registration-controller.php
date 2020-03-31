<?php

include '../../_dao/user-dao.php';

/**
 * This function will validate the parsed data and create a new user in the database if it is validated.
 * @param string $firstname
 * @param string $lastname
 * @param string $email
 * @param string $password
 */
function addNewUserController($firstname, $lastname, $email, $password)
{
    //check on firstname:
    $okFirstName = strlen($firstname) >= 3;

    //check on lastname:
    $okLastName = strlen($lastname) >= 3;

    //check the email:
    $okEmail = filter_var($email, FILTER_VALIDATE_EMAIL);

    //check password:
    $okPass = strlen($password) >= 8;

    // TODO Check if email already exists...

    // All OK --> INSERT user in database
    if ($okFirstName && $okLastName && $okEmail && $okPass) {
        // Hass the password to be encrypted....
        $hashPassword = password_hash($password, PASSWORD_DEFAULT);
        return addNewUser($firstname, $lastname, $email, $hashPassword);
    } else {
        return false;
    }
}

/**
 * This 
 */
function validateUserController($email, $password) {

    $user = getUserByEmail($email);

    if (isset($user)) {
        if (password_verify($password, $user['password'])) {
            // echo 'Correct Password!!!';
            return $user;
        } else {
            // echo 'Wrong Password!!!';
            return null;
        }
    }
}

?>
