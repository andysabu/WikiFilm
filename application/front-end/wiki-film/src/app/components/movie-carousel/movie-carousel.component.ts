import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WikiFilmService } from 'src/app/services/wiki-film/wiki-film.service';
import { Movie } from 'src/app/model/wiki-film';

@Component({
  selector: 'film-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css']
})
export class MovieCarouselComponent implements OnInit {

  movies: Movie[] = [];

  constructor(
    private wf: WikiFilmService
  ) { }
  
  ngOnInit(): void {
    this.getMoviesByDate();
  }

  getMoviesByDate() {
    this.wf.getMoviesByDate().subscribe(response => {
      this.movies = response;
      console.log(JSON.stringify(this.movies));
    });
  }
}
