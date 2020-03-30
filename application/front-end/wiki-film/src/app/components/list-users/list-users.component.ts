import { Component, OnInit } from '@angular/core';
import { WikiFilmService } from 'src/app/services/wiki-film/wiki-film.service';
import { User } from 'src/app/model/wiki-film';

@Component({
  selector: 'film-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[] = [];
  
  constructor(
    private wf: WikiFilmService
    ) { }

  ngOnInit(): void {
    const users = this.getAllUsers();
  }

  private getAllUsers() {
    this.wf.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }
}
