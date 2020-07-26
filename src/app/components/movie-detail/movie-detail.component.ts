import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  title = "Movie Detail";
  movie: any;

  constructor(
    private _route: ActivatedRoute,
    private _movieService: MovieService
  ) { }

  ngOnInit() {
    this.selectedMovie();
  }

  selectedMovie() {
    const movieId = this._route.snapshot.paramMap.get('id');
    this._movieService.getMovieById(movieId)
      .subscribe( data => this.movie = data.data.movie)
  }
}
