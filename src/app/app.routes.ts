import { Routes } from '@angular/router';
import {JobsComponent} from "./layout/jobs/jobs.component";
import {FavoritesComponent} from "./layout/favorites/favorites.component";
import {JobDetailComponent} from "./layout/job-detail/job-detail.component";

export const routes: Routes = [
  {path: 'jobs', component: JobsComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'job/:id', component: JobDetailComponent},
  {path: '', redirectTo: '/jobs', pathMatch: "full"}
];
