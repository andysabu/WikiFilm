import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Login, User } from 'src/app/model/wiki-film';
import { WikiFilmService } from 'src/app/services/wiki-film/wiki-film.service';

declare const M;

@Component({
  selector: 'film-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = <Login>{};
  user = <User>{};
 
  @Output()
  emitterUser = new EventEmitter<User>();

  constructor(
    private wf: WikiFilmService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleClick($event) {
    console.log('handleClick...');
    
    console.log('login: ' + JSON.stringify(this.login));
    
    // TODO Check validations

    this.wf.validateCredentials(this.login).subscribe((response) => {
      this.user = response;
      if (this.user.id) {
        this.showWelcomePage(true);
      }
    });
  }

  showWelcomePage(open: boolean) {
    if (open) {
      console.log('User added!!');
      
      // Remove password from interface => it is not saved in the session
      this.user.password = '';

      // Inform parent about the new user logged
      this.emitterUser.emit(this.user);

      // Redirect to the welcome page
      this.router.navigateByUrl('/welcome');
    } else {
      console.log('User NOT loggin');
      M.toast({html: 'Login failed'})
    }
  }
}
