import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMoviesList } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private _baseURL: string = 'https://yts.mx/api/v2';

  constructor(private _http: HttpClient) { }

  getMovieList() {
    return this._http.get<IMoviesList>(`${this._baseURL}/list_movies.json`);
  }
}
