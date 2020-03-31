import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "film-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  
  @Output()
  emitterSession = new EventEmitter<boolean>();
  
  constructor() {}

  ngOnInit(): void {}

  /**
   * This function will inform the application to close the session
   */
  closeSession(){
    this.emitterSession.emit(false);
  }
}
