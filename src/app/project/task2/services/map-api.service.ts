import { Injectable } from '@angular/core';
import { Coordinate } from '../models/coordinate';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Injectable({
  providedIn: 'root'
})

export class MapApiService { 

  constructor() { }

  private coordinate: Coordinate = {
    lat: 49.7824660,
    lng: 24.0603501
  }

  // searchAddress(value:string) {
  //   return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ value + '&key=AIzaSyA2RFpVN52Gi_b0eDmsl_7J21IUQd7KBpY');
  // }

  getLocation(){
    let currentLocation = { 
      lat: this.coordinate.lat,
      lng: this.coordinate.lng
    }
    return currentLocation;
  }

  handleAddressChange(address:Address){
    this.coordinate = {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng()
    }
  }

}