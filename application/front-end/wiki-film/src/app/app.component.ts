import { Component } from '@angular/core';

@Component({
  selector: 'film-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wiki-film';

  isAuthenticated: boolean = false;

  doAuthenticated(isAuthenticated) {
    this.isAuthenticated = isAuthenticated;
  }
}
