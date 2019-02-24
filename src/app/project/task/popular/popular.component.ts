import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService} from '../api/api.service';
import { disableBindings } from '@angular/core/src/render3';


@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
  providers: [ApiService]
})
export class PopularComponent implements OnInit {   
  movie: Object;
  similar_movies: Array<Object>;
  recommendations: Array<Object>;

  constructor(private apiService: ApiService, private router: ActivatedRoute) {}  

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.apiService.getMovie(id).subscribe(data => {
        this.movie = data;
        console.log(data);
      });
      this.apiService.getSimilarMovies(id).subscribe(data => {
        this.similar_movies = data['results'];
        console.log(data['results']);
    });
    this.apiService.getRecommendations(id).subscribe(data => {
      this.recommendations = data['results'];
      console.log(data['results']);
    });
  });
  }
}