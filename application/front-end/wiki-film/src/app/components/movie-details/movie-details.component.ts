import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WikiFilmService } from "src/app/services/wiki-film/wiki-film.service";
import { Movie } from "src/app/model/wiki-film";

@Component({
  selector: "film-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  myMovie: Movie;
  movies: Movie[];
  capturedId: number;

  private getAllMovies() {}

  constructor(private route: ActivatedRoute, private wf: WikiFilmService) {}

  ngOnInit(): void {
    this.wf.getAllMovies().subscribe(response => {
      this.movies = response;
      console.log(this.movies);
      this.route.paramMap.subscribe(params => {
        this.capturedId = +params.get("id");
        // console.log(this.capturedId);
        // console.log(this.movies);
        this.myMovie = this.movies.filter(w => w.id == this.capturedId)[0];
        // console.log(this.myMovie);
      });
    });
  }
}
