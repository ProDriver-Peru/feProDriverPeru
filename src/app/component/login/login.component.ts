import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  constructor(private router: Router, private driverService: DriverService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  login() {
    this.driverService
      .login(
        this.form.controls['email'].value,
        this.form.controls['password'].value
      )
      .subscribe((data) => {
        localStorage.setItem('logged', JSON.stringify(data));
        console.log(data);

      });

    console.log(localStorage.getItem('logged'));

    if (localStorage.getItem('logged') != null) {
      console.log('login');

      this.router.navigate(['home']);
    } else {
      console.log('no login');
    }
  }
}
