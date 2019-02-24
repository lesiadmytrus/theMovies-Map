import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  email: string;
  password: string;

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});

constructor(private authService: AuthService, private fb: FormBuilder,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }     

    login(value) {
    this.authService.login(value);
    this.email = this.password = '';  
    console.log(value); 
    this.registerForm.reset(); 
  }

  function (response) {
    localStorage.setItem('IDtoken', response.data.token);
    console.log('you logged in');
  }

  logout() {
    this.authService.logout();
  }

}
