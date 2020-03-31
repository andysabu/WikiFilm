import { Component, OnInit } from "@angular/core";
import { Movie } from "src/app/model/wiki-film";
import { WikiFilmService } from "../../services/wiki-film/wiki-film.service";
import { Router } from "@angular/router";
@Component({
  selector: "film-add-movie",
  templateUrl: "./add-movie.component.html",
  styleUrls: ["./add-movie.component.css"]
})
export class AddMovieComponent implements OnInit {
  movie = <Movie>{};
  validName: boolean = false;
  validDirector: boolean = false;
  validSynopsis: boolean = false;
  validDate: boolean = false;
  constructor(private wf: WikiFilmService, public router: Router) {}

  ngOnInit(): void {}

  addMovie() {
    // TODO Add Frontend validation
    this.isValidDate();
    this.isValidDirector();
    this.isValidName();
    this.isValidSynopsis();
    if (
      this.validName &&
      this.validDate &&
      this.validDirector &&
      this.validSynopsis
    ) {
      this.wf.addMovie(this.movie);
      console.log(this.movie.name);
      this.router.navigateByUrl("/movies");
    } else {
      console.log("Movie not saved");
      this.router.navigateByUrl("/addmovies");
    }
  }

  isValidName() {
    if (this.movie.name.length >= 1) {
      console.log("cannot save the movie.");
      return (this.validName = true);
    }
  }
  isValidDirector() {
    if (this.movie.director.length >= 1) {
      console.log("cannot save the movie.");
      return (this.validDirector = true);
    }
  }
  isValidSynopsis() {
    if (this.movie.synopsis.length >= 5) {
      console.log("cannot save the movie.");
      return (this.validSynopsis = true);
    }
  }
  isValidDate() {
    if (this.movie.release_date.length >= 6) {
      console.log("cannot save the movie.");
      return (this.validDate = true);
    }
  }
}
