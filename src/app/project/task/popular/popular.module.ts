import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';
import { SearchComponent } from '../search/search.component';

@NgModule({
  declarations: [PopularComponent, SearchComponent],
  imports: [
    CommonModule,
    PopularRoutingModule,
    FormsModule
  ]
})
export class PopularModule { }
