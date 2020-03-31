import { Component, OnInit } from '@angular/core';
import { WikiFilmService } from '../../services/wiki-film/wiki-film.service';

@Component({
  selector: 'film-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
