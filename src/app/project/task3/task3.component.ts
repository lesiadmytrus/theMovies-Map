import { Component, OnInit } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

import { MapApiService } from '../task2/services/map-api.service';

@Component({
  selector: 'task3-post',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css'],
  providers: [MapApiService]
})
export class Task3Component implements OnInit {
  post: string = 'NG1 1HY';
  
  lat: number = 49.7824660; 
  lng: number = 24.0603501;

  postForm = new FormGroup({
    firstPost: new FormControl(''),
});

  constructor(private mapApiService : MapApiService, private fb: FormBuilder) {
   }

  ngOnInit() {
  }
}
