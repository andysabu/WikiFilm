import { RegistrationComponent } from "./components/registration/registration.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListMoviesComponent } from "./components/list-movies/list-movies.component";
import { MovieDetailsComponent } from "./components/movie-details/movie-details.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  //declaring roots:
  {
    path: "",
    redirectTo: "registration",
    pathMatch: "full"
  },
  {
    path: "registration",
    component: RegistrationComponent
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
