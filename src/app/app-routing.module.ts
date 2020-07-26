import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListingComponent } from './components/movie-listing/movie-listing.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'movie-listing', pathMatch: 'full'
  },
  {
    path: 'movie-listing', component: MovieListingComponent
  },
  {
    path: 'movie-detail', component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
