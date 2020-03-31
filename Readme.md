# Index

1. [Type of project](#type-of-project)

2. [Getting start](#getting-start)

    * [Database](#database)
    * [Back-end](#back-end)
    * [Front-end](#front-end)

3. [Views](#views)

4. [Tasks](#tasks)

    * [Authetication](#authetication)
    * [Navbar](#navbar)
    * [Welcome](#welcome)
    * [Movies Catalog](#movies-catalog)
    * [Add movie](#add-movie)
    * [Playlist](#playlist)

5. [TODO] (#todo)

# Type of project
1. Tecnhologies:
    - Front-end:
        1. Angular v9.0
        2. Materialize CSS
        3. HTTPClient to manage JSON responses from API
    - Back-end:
        1. PHP to consume requests against the database
        2. HTML to display short visual descriptions from API requests
        3. SASS for basic style
2. Database: [Free MySQL Hosting](https://www.freemysqlhosting.net)
3. Software Development Version Control: [GitHub](https://github.com/andysabu/WikiFilm)
4. Project Managment --> [Trello](https://trello.com/b/X6EWAGsu/web-site-mowies)
5. Servers:
    - The __database__ is installed online. The provider is *freemysqlhosting*.
    - The __back-end__ is installed in the localhost using the environment *WAMP* / *MAMP* for Windows / Unix systems and it contains the bundle:
        + Web Apache
        + MySQL
        + myPHPAdmin
![RESTful Web Service](https://phppot.com/wp-content/uploads/2015/10/restful-web-services-api-architecture.jpg)
    - The __front-end__ is compiled by the command `ng serve` support by *Angular CLI*, running a live browser.

# Getting start

### Database

It is not necessary to connect the online database. If this access is revoked, it can be used the local server with MySQL in the computerto get access.

To install the database, please, refer to the path:
> back-end/DB scripts

Then, execute in the same order all the scripts you will find.

If it can also be tested the _online_ database which is provided by freemysqlhosting. The configuration can be reviewed under the following path:
> back.end/config/database-config.php

### Back-end

The API to provide responses should be deployed in your local server (WAMP/MAMP).

It is recommended to copy and paste the contained of the folder _back-end_ into a folder named **wikifilm** in the default path of the local server

_original_
> back-end/.....

_localhost-WAMP_
> www/wikifilm...

If the requests do not work when executed, it is possible to review also the setup in the client for WikiFilm application. Please, refer to the following path:
> front-end/wiki-film/src/app/services/wiki-film/wiki-film.service.ts

### Front-end

From the main root path where the angular application is installed (client app), the first time it will be required to install all the modules for Angular. To do so, execute the command:

`npm install`

Once all the dependencies are installed, it is possible to run the server to serve the application in a live browser:

`ng serve -o`

# Views
1. Authenticator
    - Registration
    - Log in
2. Welcome
    - Carousel of last 3 released movies
3. List of movies
4. Playlist

# Tasks

### Authetication

This is the access to the main application. To use the application the client will always need to either register or log in.

The workflow will consider some validations either for register or either for log in.

The password is hash in the database and **__never__** return to the client side.

The `.localStorage` allows to access a Storage object for the Document's origin.

The stored data is: __User__; under the key: `wf-user`.

----

### Navbar

The main menu is only displayed after the authentication process.

This is a responsive menu which will turn into a Side menu for smaller devices.

----

### Welcome

This page displays serves as a home.

It contains a carousel with the last 3 released movies in the database.

----

### Movies Catalog

This page will display a list of all movies in the database.

It also adds a search to filter movies by name,

From this page, it is also possible to add create new movies.

----

### Add movie

This view let to add movies to the database.

A small validation is executed before being saved.

----

### Playlist

This page will show the personal list of movies selected by the user logged.

To be completed.

----

# TODO

1. Playlist
2. Options
3. ...
