import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task3RoutingModule } from './task3-routing.module';
import { Task3Component } from './task3.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Task3Component],
  imports: [
    CommonModule,
    Task3RoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Task3Module { }
