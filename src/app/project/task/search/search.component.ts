import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ApiService]
})

export class SearchComponent implements OnInit {

    popular_movies: any;
    upcoming_movies: any; 
    search_result: any;
    movie: any;
    movie_genres: Array<Object>=[];
    favorite_movies: Array<Object>=[];
    localStorageItems: Array<Object>=[];

  
    constructor(private apiService : ApiService) {

      this.apiService.getUpcomingMovies().subscribe(data => {
        this.upcoming_movies = data['results'];
      });
    
      this.apiService.getPopularMovies().subscribe(data => {
        this.popular_movies = data['results'];
      }); 
   
      this.apiService.getGenres().subscribe(data => {
        this.movie_genres = data['genres'];
      });

      this.favorite_movies = [];

      this.localStorageItems = JSON.parse(localStorage.getItem('favirite')); 
    }
  
    searchMovies() { 
      this.apiService.searchMovie(this.movie).subscribe(data => {
        this.search_result = data['results'];
      });
    }

    getMoviesGenres(ids) {
      const x = this.movie_genres.filter(obj => {
        return ids.includes(obj['id']);
      });
      return x;
    }

    ngOnInit() {
    }

    addToFavorite(movie){
      this.favorite_movies.push(movie);
      localStorage.setItem('favirite',  JSON.stringify(this.favorite_movies));
      this.localStorageItems = JSON.parse(localStorage.getItem('favirite'));
    }

    deleteFromFavorite(original_title) {
     this.localStorageItems = this.localStorageItems.filter(item => {
        return item['original_title'] !== original_title;
      });

      localStorage.setItem('favirite',  JSON.stringify(this.localStorageItems));
    }
  }