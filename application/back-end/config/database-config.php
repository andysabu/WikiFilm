<?php

    $hostMacintosh = 'Macintosh';
    $hostWindows = 'Windows';

    // Check if the server where is running is Macintosh or something else
    // and set the connection's parameters
    // if (!strpos($_SERVER['HTTP_USER_AGENT'], $hostMacintosh)) {
    //     define('DB_HOST', 'localhost:3306');
    //     define('DB_DATABASE', 'moviedb');
    //     define('DB_USER', 'vscode');
    //     define('DB_PASSWORD', '1234');
    // } elseif (!strpos($_SERVER['HTTP_USER_AGENT'], $hostWindows)) {
    //     define('DB_HOST', 'localhost:8889');
    //     define('DB_DATABASE', 'moviedb');
    //     define('DB_USER', 'vscode');
    //     define('DB_PASSWORD', '1234');
    // }

    define('DB_HOST', 'sql7.freemysqlhosting.net:3306');
    define('DB_DATABASE', 'sql7329944');
    define('DB_USER', 'sql7329944');
    define('DB_PASSWORD', 'kLB6cJwpm7');


?>