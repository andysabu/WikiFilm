import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/wiki-film';
import { WikiFilmService } from 'src/app/services/wiki-film/wiki-film.service';

declare const M;

@Component({
  selector: 'film-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = <User>{};
 
  confirmPassword: string = '';

  @Output()
  emitterUser = new EventEmitter<User>();

  constructor(
    private wf: WikiFilmService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  handleClick($event) {
    console.log('handleClick...');
    
    console.log('user: ' + JSON.stringify(this.user));
    
    // TODO Check validations

    this.wf.addUser(this.user).subscribe((response) => {
      let isAdded = response;
      this.showWelcomePage(isAdded);
    });
  }

  showWelcomePage(open: boolean) {
    if (open) {
      console.log('User added!!');
      
      // Remove password from interface => it is not saved in the session
      this.user.password = '';

      this.emitterUser.emit(this.user);
      this.router.navigateByUrl('/welcome');
    } else {
      console.log('User NOT added!!');
      M.toast({html: 'User not created!'})
    }
  }
}
