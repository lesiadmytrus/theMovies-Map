import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { AgmCoreModule } from '@agm/core';

import { Task2RoutingModule } from './task2-routing.module';
import { Task2Component } from './task2.component';

@NgModule({
  declarations: [Task2Component],
  imports: [
    CommonModule,
    Task2RoutingModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyA2RFpVN52Gi_b0eDmsl_7J21IUQd7KBpY',
    }),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Task2Module { }