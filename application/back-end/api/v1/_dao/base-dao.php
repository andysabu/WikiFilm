<?php

// Set the parameters to access the Database
include '../../../../config/database-config.php';
include 'utils-dao.php';

/**
 * This function will get all the entries which match with the parsed statement for a specific table.
 * @param string $table name of the table which the query is executed against to
 * @param string $statement (optional) sort of clauses to get a more specific result from the database, using (WHERE, GROUP BY, ...)
 * @return mysqli_result|bool A mysqli_result object or TRUE. Returns FALSE on failure.
 */
function doSelect($table, $statement)
{
    $query = 'SELECT * FROM ' . $table . ' ' . $statement;
    return runQuery($query);
}

/**
 * This function will generate the INSERT query to be executed for the parsed table
 * @param string $table nane of the table where the INSERT Will executed
 * @param array|string $columns affected columns
 * @param array|string $values data for that columns
 */
function doInsert($table, $columns, $values)
{
    $stringValues = buildValuesString($values);
    $query = 'INSERT INTO ' . $table . ' (' . implode(", ", $columns) . ') VALUES (' . $stringValues . ')';
    return runQuery($query);
}

function doUpdate()
{
}

function doDelete()
{
}

/**
 * This function will execute the query parsed.
 * @param string $query An SQL query
 * @return mysqli_result|bool A mysqli_result object or TRUE. Returns FALSE on failure.
 */
function runQuery($query) {
    $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

    $result = false;
    if ($conn) {
        $result = mysqli_query($conn, $query);
    } else {
        echo 'Connection failed';
    }

    mysqli_close($conn);

    return $result;
}



?>