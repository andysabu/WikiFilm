import { Injectable } from "@angular/core";
import { BaseService } from "../base/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie, User, Login } from "src/app/model/wiki-film";

@Injectable({
  providedIn: "root"
})
export class WikiFilmService extends BaseService {
  // Andrés
  // private baseURL = "http://localhost:8888/wikifilm/";
  // Oleg
  // private baseURL = 'http://localhost/wiki-film/application/back-end/';
  //Ilyes
  private baseURL = "http://localhost/wiki-film/";

  private version = "api/v1/";

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  searchMovie(inputSearch): Observable<Movie[]> {
    console.log("getAllMovies...");

    const request = this.version + "movie/search/";
    const url = this.baseURL + request + "?search=" + inputSearch;

    return Observable.create(observer => {
      let movies: Movie[] = Array();

      this.doGET(url).subscribe(response => {
        try {
          console.log(JSON.stringify(response));
          response.forEach(element => {
            const movie = element;
            movies.push(movie);
          });
        } catch (error) {
          console.log(error);
        }
        observer.next(movies);
      });
    });
  }
  getAllMovies(): Observable<Movie[]> {
    console.log("getAllMovies...");

    const request = this.version + "movie/getall/";
    const url = this.baseURL + request;

    return Observable.create(observer => {
      let movies: Movie[] = Array();

      this.doGET(url).subscribe(response => {
        try {
          console.log(JSON.stringify(response));
          response.forEach(element => {
            const movie = element;
            movies.push(movie);
          });
        } catch (error) {
          console.log(error);
        }
        observer.next(movies);
      });
    });
  }

  addMovie(movie: Movie) {
    console.log(JSON.stringify(movie));
    const request = this.version + "movie/add/";
    const params = `?name=${movie.name}&release_date=${movie.release_date}&director=${movie.director}&synopsis=${movie.synopsis}`;
    const url = this.baseURL + request + params;
    this.doGET(url).subscribe(response => {
      console.log(response);
    });
  }

  getAllUsers(): Observable<User[]> {
    console.log("getAllUsers...");

    const request = this.version + "user/getall/";
    const url = this.baseURL + request;

    return Observable.create(observer => {
      let users: User[] = Array();

      this.doGET(url).subscribe(response => {
        try {
          console.log(JSON.stringify(response));
          response.forEach(element => {
            const user = element;
            users.push(user);
          });
        } catch (error) {
          console.log(error);
        }
        observer.next(users);
      });
    });
  }

  addUser(user: User): Observable<boolean> {
    console.log("addUser...");

    const request = this.version + "registration/signup";
    const values =
      "?firstname=" +
      user.firstname +
      "&lastname=" +
      user.lastname +
      "&email=" +
      user.email +
      "&password=" +
      user.password;

    const url = this.baseURL + request + values;

    return Observable.create(observer => {
      let isAdded = false;
      this.doGET(url).subscribe(response => {
        try {
          console.log(JSON.stringify(response));
          isAdded = response;
        } catch (error) {
          console.log(error);
        }
        observer.next(isAdded);
      });
    });
  }

  validateCredentials(login: Login): Observable<User> {
    console.log("validateCredentials...");

    const request = this.version + "registration/login";
    const values = "?email=" + login.email + "&password=" + login.password;

    const url = this.baseURL + request + values;

    return Observable.create(observer => {
      let user = <User>{};
      this.doGET(url).subscribe(response => {
        try {
          console.log(JSON.stringify(response));
          user = response;
        } catch (error) {
          console.log(error);
        }
        observer.next(user);
      });
    });
  }
}
