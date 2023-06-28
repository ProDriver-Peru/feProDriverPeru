import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private AuthService: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  login() {

    if(this.AuthService.checkLogin(this.form.value.email, this.form.value.password))
    {
      this.router.navigate(['home']);
    }
    else{

    }
  }

}
