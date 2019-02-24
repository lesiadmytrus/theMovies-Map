import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { DetailsComponent } from './task/details/details.component';
import { PopularComponent } from './task/popular/popular.component';


@NgModule({
  declarations: [ProjectComponent, DetailsComponent, PopularComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
  ]
})
export class ProjectModule { }
