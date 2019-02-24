import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'cf7c522aba0ab01828fe1529353bf2b6';
  private movie_string: string;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key+'&language-US');
  }

  getUpcomingMovies() {
    return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2019-03-01&primary_release_date.lte=2019-07-31' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this._http.get(this.movie_url + 'movie/popular' + '?api_key=' + this.api_key+ '&language=en-US&page=1');
  }

  getMovie(id: number) {
    return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }

  getSimilarMovies(id: number) {
    return this._http.get(this.movie_url + 'movie/'+id+'/similar' + '?api_key=' + this.api_key+ '&language=en-US&page=1')
    .pipe(
      catchError(this._handleError),
      map((response=>response)
    )
    )

  }  

  
  getRecommendations(id: number) {
    return this._http.get(this.movie_url + 'movie/'+id+'/recommendations' + '?api_key=' + this.api_key+ '&language=en-US&page=1');
  } 

  getGenres(){
    return this._http.get(this.movie_url+ 'genre/movie/list?api_key=' + this.api_key);
  }

  private _handleError(err: HttpErrorResponse) {
    return throwError(err);
  }

}

