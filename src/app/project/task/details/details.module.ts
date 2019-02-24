import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { RunTimePipe } from './pipes/run-time.pipe';

@NgModule({
  declarations: [DetailsComponent, RunTimePipe],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    RunTimePipe
  ],
  exports: [RunTimePipe]
})
export class DetailsModule { }
