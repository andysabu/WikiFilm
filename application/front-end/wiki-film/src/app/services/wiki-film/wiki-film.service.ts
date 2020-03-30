import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/model/wiki-film';

@Injectable({
  providedIn: 'root'
})
export class WikiFilmService extends BaseService {

  private baseURL = 'http://localhost:8888/wikifilm/';
  private version = 'api/v1/';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getAllMovies(): Observable<Movie[]> {
    console.log('getAllMovies...');

    const request = this.version + 'movie/getall/';
    const url = this.baseURL + request;

    return Observable.create(observer => {
      let movies: Movie[] = Array();

      this.doGET(url).subscribe(response => {
        try {
          console.log(JSON.stringify(response));
          // if (symbols.length == 1) {
          //   const profile = response['profile'];
          //   profiles.push(profile);
          // } else {
          response.forEach(element => {
            const movie = element;
            movies.push(movie);
          });
          // }
        } catch (error) {
          console.log(error);
        }
        observer.next(movies);
      });
    });
  }

}
