import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMoviesList, IMovieDetail } from '../interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _baseURL: string = 'https://yts.mx/api/v2';

  constructor(private _http: HttpClient) { }

  getMovieList(): Observable<IMoviesList> {
    return this._http.get<IMoviesList>(`${this._baseURL}/list_movies.json`);
  }

  getMovieById(id: any): Observable<IMovieDetail> {
    return this._http.get<IMovieDetail>(`${this._baseURL}/movie_details.json?movie_id=${id}`);
  }
}
