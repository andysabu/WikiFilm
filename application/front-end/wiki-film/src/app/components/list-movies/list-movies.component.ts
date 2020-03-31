import { Component, OnInit } from "@angular/core";
import { WikiFilmService } from "src/app/services/wiki-film/wiki-film.service";
import { Movie } from "src/app/model/wiki-film";

@Component({
  selector: "film-list-movies",
  templateUrl: "./list-movies.component.html",
  styleUrls: ["./list-movies.component.css"]
})
export class ListMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private wf: WikiFilmService) {}

  ngOnInit(): void {
    const movies = this.getAllMovies();
  }

  private getAllMovies() {
    this.wf.getAllMovies().subscribe(response => {
      this.movies = response;
    });
  }
}
