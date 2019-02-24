import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { DetailsComponent} from '../project/task/details/details.component';
import { PopularComponent } from './task/popular/popular.component';



const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#TaskModule'
      },
      {
        path: 'task1',
        loadChildren: './task1/task1.module#Task1Module'
      },
      {
        path: 'task2',
        loadChildren: './task2/task2.module#Task2Module'
      },
      {
        path: 'task3',
        loadChildren: './task3/task3.module#Task3Module'
      },
      {
        path: 'register',
        loadChildren: './task1/register/register.module#RegisterModule'
      },
      {
        path: 'login',
        loadChildren: './task1/login/login.module#LoginModule'
      }
    ]
},   
  { path: 'movie/:movieID', component: DetailsComponent },
  { path: 'movie/:id', component: PopularComponent }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
