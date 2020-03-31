export interface Movie {
    id: number;
    name: string;
    synopsis: string;
    release_date: string;
    director: string;
    poster: string;
}

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface Login {
    email: string;
    password: string;
}