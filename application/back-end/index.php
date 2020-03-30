<?php

    $base_api = 'api/';
    $version_api = 'v1/';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Wiki Film</title>
</head>

<body>
    <main>
        <h1> Wiki Film</h1>
        <p>
            This API provides info about films and actors.
        </p>

        <p>
            It can also provide playlists based on personal preference for the logged user.
        </p>

        <p>
            It also support administration of users by registering and loading their details.
        </p>

        <p>
            <ul>
                <li>
                    <?php
                        $urlMovies = $base_api . $version_api . 'movie';
                        echo '<a href="' . $urlMovies . '">Requests for movies</a>';
                    ?>
                </li>
            </ul>
        </p>

    </main>
</body>

</html>