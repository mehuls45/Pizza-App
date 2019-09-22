import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pwd;
  errorMessage = null;

  loginForm = new FormGroup(
    {
      username: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)])
    }
  );

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  submit() {

    this.user = this.loginForm.value.username;
    this.pwd = this.loginForm.value.password;

    if (this.user == 'user' && this.pwd == 'user') {

      localStorage.setItem("role", "user")
      this.route.navigateByUrl('')
      
    }
    else {
      this.errorMessage = "Invalid Credentials";
    }
  }

  clear() {
    this.loginForm.reset();
    this.errorMessage = null;
  }

}
