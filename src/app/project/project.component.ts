import { Component, OnInit } from '@angular/core';
import { AuthService } from '../project/task1/services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private authService:AuthService) {
   }

  ngOnInit() {
  }

}
