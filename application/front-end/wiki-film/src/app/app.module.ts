import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticatorComponent } from './components/authenticator/authenticator.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    RegistrationComponent,
    NavBarComponent,
    ListUsersComponent,
    MovieDetailsComponent,
    LoginComponent,
    AuthenticatorComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
