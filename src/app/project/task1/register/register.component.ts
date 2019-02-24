import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { FormGroup, FormBuilder, FormControl } from "@angular/forms"; 
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  successMessage: string;

    registerForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  tryRegister(value){
    this.authService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
    this.registerForm.reset();
  }

  // cli() {
  //   this.router.navigate(['/task']);
  // }

}
