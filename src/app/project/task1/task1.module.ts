import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthService } from '../task1/services/auth.service';

@NgModule({
  declarations: [Task1Component],
  imports: [
    CommonModule,
    Task1RoutingModule, 
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ AuthService]
})
export class Task1Module { }
