import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/wiki-film';

declare const M;

@Component({
  selector: 'film-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {

  @Output()
  isAuthenticated = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.loadTabs();
  }

  private loadTabs() {
    var elem = document.querySelector('.tabs');
    var instance = M.Tabs.init(elem, {});
  }

  /**
   * This function will:
   * - Emit an event to inform that the user was well authenticated.
   * - Add the user's details to the Session
   * @param user 
   */
  loadUser(user: User) {
    console.log('loadUser...');
    // Inform that a user was authenticated and it can conitnue
    this.isAuthenticated.emit(true);
    // Add to local session
    localStorage.setItem('wf-user', JSON.stringify(user));
  }
}
