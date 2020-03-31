import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'film-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wiki-film';

  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.validateSession();
  }

  /**
   * This function will look at the browser's Session and check
   * if the user was already login 
   */
  validateSession(){
    if (localStorage.getItem('wf-user')) {
      this.isAuthenticated = true;
    }
  }

  /**
   * This function will:
   * 1. Update the view to:
   *  - Display Authenticator view or
   *  - Display Welcome view
   * 2. When logoff, remove user's credentials from Session in browser
   * @param isAuthenticated 
   */
  doAuthenticated(isAuthenticated) {
    // Catch if user is authenticated
    this.isAuthenticated = isAuthenticated;

    // Closing session => remove user's info from browser Session
    if (!isAuthenticated) {
      localStorage.removeItem('wf-user');
    }
  }
}
