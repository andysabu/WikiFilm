import { Injectable } from "@angular/core";
import { BaseService } from "../base/base.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie, User } from "src/app/model/wiki-film";

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

  // getMovieById(id){
  //   const request = this.version + "movie/" + id;
  //   const url = this.baseURL + request;

  // }
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
}
