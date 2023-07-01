import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  form5: FormGroup = new FormGroup({});
  form6: FormGroup = new FormGroup({});

  user: User = new User();

  driver: Driver = new Driver();

  employer: Employer = new Employer();

  mensaje: string = '';
  step: number = 1;
  @ViewChild(MatSelect) select: MatSelect;

  constructor(
    private driverService: DriverService,
    private employerService: EmployerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form1 = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
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
      dateOfBirth: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.required),
    });
    this.form2 = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.form3 = new FormGroup({
      description: new FormControl('', Validators.required),
      imageProfile: new FormControl(''),
    });
    this.form4 = new FormGroup({
      ruc: new FormControl('', [Validators.required, Validators.required, Validators.pattern('^[0-9]+$')]),
      companyname: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      companyDescription: new FormControl('', Validators.required),
      imageCompany: new FormControl(''),
    });
    this.form5 = new FormGroup({
      licensetype: new FormControl('', Validators.required),
      licensenumber: new FormControl('', Validators.required),
      sector: new FormControl('', Validators.required),
      yearsExperience: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    });
    this.form6 = new FormGroup({});
  }

  form1submit(): void {
    this.user.name = this.form1.value.name;
    this.user.lastName = this.form1.value.lastName;
    this.user.dni = this.form1.value.dni;
    this.user.dateOfBirth = this.form1.value.dateOfBirth;

    this.user.rol = this.form1.value.rol;

    this.step++;
  }

  form2submit(): void {
    this.user.password = this.form2.value.password;
    this.user.email = this.form2.value.email;

    this.step++;
  }

  form3submit(): void {
    this.user.description = this.form3.value.description;
    this.user.imageProfile = this.form3.value.imageProfile;

    console.log(this.user.rol);

    if (this.user.rol == 'driver') {
      this.driver.user = this.user;
      this.step = 5;
    } else if (this.user.rol == 'employer') {
      this.employer.user = this.user;
      this.step = 4;
    }
  }

  form4submit(): void {
    this.employer.ruc = this.form4.value.ruc;
    this.employer.companyName = this.form4.value.companyname;
    this.employer.companyDescription = this.form4.value.companyDescription;
    this.employer.imageCompany = this.form4.value.imageCompany;
    this.step = 6;
  }
  form5submit(): void {
    this.driver.user = this.user;
    this.driver.licensetype = this.form5.value.licensetype;
    this.driver.license = this.form5.value.licensenumber;
    this.driver.sector = this.form5.value.sector;
    this.step = 6;
    this.driver.yearsExperience = this.form5.value.yearsExperience;
  }
  form6submit(): void {

    if (this.user.rol == 'driver') {
      this.driverService.registerDriver(this.driver).subscribe((data) => {
        this.router.navigate(['login']);
      });
    } else if (this.user.rol == 'employer') {
      this.employerService.registerEmployer(this.employer).subscribe((data) => {
        this.router.navigate(['login']);
      });
    }
  }
}
