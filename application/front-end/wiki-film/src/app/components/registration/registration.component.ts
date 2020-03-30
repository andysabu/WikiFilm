import { User } from 'src/app/model/wiki-film';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'film-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = <User>{};

  constructor() { }

  ngOnInit(): void {
  }

}
