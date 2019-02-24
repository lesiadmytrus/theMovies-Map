import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
// import { RunTimePipe } from './pipes/run-time.pipe';

@NgModule({
  declarations: [TaskComponent, SearchComponent, FavoriteComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    // RunTimePipe
  ]
})
export class TaskModule { }