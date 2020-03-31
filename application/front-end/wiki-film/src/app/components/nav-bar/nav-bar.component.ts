import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { User } from 'src/app/model/wiki-film';

declare const M;

@Component({
  selector: "film-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  
  user = <User> {}

  @Output()
  emitterSession = new EventEmitter<boolean>();
  
  constructor() {}

  ngOnInit(): void {
    this.getUser();
    this.initSideBar();
  }

  initSideBar() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  }

  getUser() {
    const stringUser = localStorage.getItem('wf-user');
    this.user = JSON.parse(stringUser);
  }

  showAlert(){
    M.toast({html: 'This functionallity is not available!'})
  }

  /**
   * This function will inform the application to close the session
   */
  closeSession(){
    this.emitterSession.emit(false);
  }
}
