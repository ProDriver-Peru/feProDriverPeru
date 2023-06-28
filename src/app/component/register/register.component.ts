import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/model/User';
import { Driver } from 'src/model/Driver';
import { Employer } from 'src/model/Employer';
import { MatSelect } from '@angular/material/select';
import { DriverService } from 'src/app/service/driver.service';
import { EmployerService } from 'src/app/service/employer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form1: FormGroup = new FormGroup({});
  form2: FormGroup = new FormGroup({});
  form3: FormGroup = new FormGroup({});
  form4: FormGroup = new FormGroup({});
  role: string;
  driver: Driver = new Driver();
  employer: Employer = new Employer();
  mensaje: string = '';
  step: number = 1;
  @ViewChild(MatSelect) select: MatSelect;

  constructor(
    private driverService: DriverService,
    private employerService: EmployerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form1 = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(50),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(50),
      ]),
      dni: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.pattern('^[0-9]*$'),
      ]),
    });

    this.form2 = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      role: new FormControl('', Validators.required),
    });
    this.form3 = new FormGroup({
      ruc: new FormControl('', Validators.required),
      companyname: new FormControl('', Validators.required),
      sector: new FormControl('', Validators.required),
    });
    this.form4 = new FormGroup({
      licensetype: new FormControl('', Validators.required),
      licensenumber: new FormControl('', Validators.required),
    });
  }

  next(): void {
    this.step++;
  }

  back(): void {
    this.step--;
  }

  form1submit(): void {
    this.step++;
  }
  form2submit(): void {
    this.role = this.form2.value.role;

    if (this.role == 'driver') {
      this.step = 4;
    } else {
      this.step = 3;
    }
  }

  form3submit(): void {
    this.employer.user = this.returnUserData();
    this.employer.ruc = this.form3.value.ruc;
    this.employer.companyName = this.form3.value.companyname;
    this.employerService.registerEmployer(this.employer).subscribe((data) => {
      this.router.navigate(['login']);
    });
  }

  form4submit(): void {
    this.driver.user = this.returnUserData();
    this.driver.licenseType = this.form4.value.licensetype;
    this.driver.license = this.form4.value.licensenumber;
    this.driver.sector = this.form3.value.rubro;
    this.driverService.registerDriver(this.driver).subscribe((data) => {
      this.router.navigate(['login']);
    });
  }

  returnUserData(): User {
    let user: User = new User();
    user.name = this.form1.value.firstname;
    user.lastname = this.form1.value.lastname;
    user.dni = this.form1.value.dni;
    user.email = this.form2.value.email;
    user.password = this.form2.value.password;
    user.role = this.form2.value.role;
    return user;
  }
}
