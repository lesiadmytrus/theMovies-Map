import { Component } from '@angular/core';
import { MapApiService } from './services/map-api.service';
import { Coordinate } from '../task2/models/coordinate';

@Component({
  selector: 'task2-post',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css'],
  providers: [MapApiService]
})

export class Task2Component {

  public coordinate: Coordinate = {
  lat: 49.7824660,
  lng: 24.0603501
  }
  
  constructor(
    private mapApiService : MapApiService){}

  ngOnInit() {
  }

  handleAddressChange(address){
    this.mapApiService.handleAddressChange(address);
  }

  showLocation(){
    this.coordinate = this.mapApiService.getLocation();
  }

}