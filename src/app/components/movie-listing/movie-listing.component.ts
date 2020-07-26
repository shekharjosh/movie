import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss']
})
export class MovieListingComponent implements OnInit {
  title = "Movie Listing";
  movies: any = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit() { 
    this.getMovieList();
  }

  getMovieList() {
    return this._movieService.getMovieList()
      .subscribe( data => this.movies = data.data.movies )
  }
}
