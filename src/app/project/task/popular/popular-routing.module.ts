import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './popular.component';

const routes: Routes = [
  {
    path: ':id',
    component: PopularComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularRoutingModule { }
