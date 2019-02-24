import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ApiService } from '../api/api.service';

@Component({ 
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] 
})
export class DetailsComponent implements OnInit {
  movie: any;
  constructor(private router: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['movieID'];
      this.apiService.getMovie(id).subscribe(data => {
        this.movie = data;
        console.log(data);
      });
  });
  }

}