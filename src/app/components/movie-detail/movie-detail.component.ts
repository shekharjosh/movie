import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  title = "Movie Detail";
  movie: any;
  subscription?: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _movieService: MovieService
  ) { }

  ngOnInit() {
    this.selectedMovie();
    //this.getMovieDetail();
  }

  selectedMovie() {
    const movieId = this._route.snapshot.paramMap.get('id');
    this.subscription = this._movieService.getMovieById(movieId)
      .subscribe( data => this.movie = data.data.movie)
  }

  //BehaviorSubject
  // getMovieDetail() {
  //   this.subscription = this._movieService.getMovieDetail()
  //     .subscribe(data => this.movie = data)
  // }
}
