import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { PopularComponent } from '../popular/popular.component';

@NgModule({
  declarations: [PopularComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
  ]
})
export class SearchModule { }
