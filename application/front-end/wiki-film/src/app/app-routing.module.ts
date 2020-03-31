import { RegistrationComponent } from "./components/registration/registration.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListMoviesComponent } from "./components/list-movies/list-movies.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { LoginComponent } from "./components/login/login.component";
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthenticatorComponent } from './components/authenticator/authenticator.component';

const routes: Routes = [
  //declaring roots:
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'authenticator',
    component: AuthenticatorComponent
  },
  {
    path: "movies",
    component: ListMoviesComponent,
    pathMatch: "full"
  },
  {
    path: "movie/:id",
    component: MovieDetailsComponent,
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegistrationComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
