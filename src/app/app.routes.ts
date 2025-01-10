import { Routes } from '@angular/router';
import {JobsComponent} from "./layout/jobs/jobs.component";
import {FavoritesComponent} from "./layout/favorites/favorites.component";

export const routes: Routes = [
  {path: 'jobs', component: JobsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', redirectTo: '/jobs', pathMatch: "full"}
];
