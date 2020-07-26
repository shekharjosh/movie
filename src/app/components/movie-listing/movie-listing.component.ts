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
  subscription?: Subscription;

  constructor(private _movieService: MovieService) { }

  ngOnInit() { 
    this.getMovieList();
  }

  getMovieList() {
    this.subscription = this._movieService.getMovieList()
      .subscribe( data => this.movies = data.data.movies )
  }

  //BehaviorSubject
  // sendMovieDetail(id: any) {
  //   this._movieService.sendMovieDetail(id);
  // }
}
