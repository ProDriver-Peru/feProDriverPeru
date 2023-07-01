import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/User';
import { Employer } from 'src/model/Employer';
import { Driver } from 'src/model/Driver';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployerService } from 'src/app/service/employer.service';
import { DriverService } from 'src/app/service/driver.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit {
  user: User = JSON.parse(localStorage.getItem('userLogged') || '{}');
  form1: FormGroup = new FormGroup({});
  form2: FormGroup = new FormGroup({});
  driver: Driver = new Driver();
  employer: Employer = new Employer();

  constructor(
    private driverService: DriverService,
    private employerService: EmployerService,
    public dialogRef: MatDialogRef<ProfileEditComponent>
  ) {}
  ngOnInit(): void {
    if (this.user.rol == 'employer') {
      this.employerService.getEmployerById(this.user.id).subscribe((data) => {
        this.employer = data;
        this.form1Init();
      });
    } else {
      this.driverService.getDriverById(this.user.id).subscribe((data) => {
        this.driver = data;
        this.form2Init();
      });
    }
  }

  form1Init() {
    this.form1 = new FormGroup({
      id: new FormControl(this.user.id, []),
      dni: new FormControl(this.user.dni, []),
      name: new FormControl(this.user.name, []),
      lastName: new FormControl(this.user.lastName, []),
      dateOfBirth: new FormControl(this.user.dateOfBirth, []),
      description: new FormControl(this.user.description, []),
      imageProfile: new FormControl(this.user.imageProfile, []),
      ruc: new FormControl(this.employer.ruc, []),
      companyname: new FormControl(this.employer.companyName, []),
      companyDescription: new FormControl(this.employer.companyDescription, []),
    });
  }

  form2Init() {
    this.form2 = new FormGroup({
      id2: new FormControl(this.user.id, []),
      dni2: new FormControl(this.user.dni, []),
      name2: new FormControl(this.user.name, []),
      lastName2: new FormControl(this.user.lastName, []),
      dateOfBirth2: new FormControl(this.user.dateOfBirth, []),
      description2: new FormControl(this.user.description, []),
      imageProfile2: new FormControl(this.user.imageProfile, []),
      licensetype2: new FormControl(this.driver.licensetype, []),
      licensenumber2: new FormControl(this.driver.license, []),
      sector2: new FormControl(this.driver.sector, []),
    });
  }

  form1submit() {
    this.employerService.updateEmployer(this.employer).subscribe((data) => {
      this.employer.user.id = this.form1.value.id;
      this.employer.user.dni = this.form1.value.dni;
      this.employer.user.name = this.form1.value.name;
      this.employer.user.lastName = this.form1.value.lastName;
      this.employer.user.dateOfBirth = this.form1.value.dateOfBirth;
      this.employer.user.description = this.form1.value.description;
      this.employer.user.imageProfile = this.form1.value.imageProfile;
      this.employer.ruc = this.form1.value.ruc;
      this.employer.companyName = this.form1.value.companyname;
      this.employer.companyDescription = this.form1.value.companyDescription;
      this.employerService.updateEmployer(this.employer).subscribe((data) => {
        console.log(data);
      });
      this.dialogRef.close();
    });
  }

  form2submit() {
    this.driverService.updateDriver(this.driver).subscribe((data) => {
      this.driver.user.id = this.form2.value.id2;
      this.driver.user.dni = this.form2.value.dni2;
      this.driver.user.name = this.form2.value.name2;
      this.driver.user.lastName = this.form2.value.lastName2;
      this.driver.user.dateOfBirth = this.form2.value.dateOfBirth2;
      this.driver.user.description = this.form2.value.description2;
      this.driver.user.imageProfile = this.form2.value.imageProfile2;
      this.driver.licensetype = this.form2.value.licensetype2;
      this.driver.license = this.form2.value.licensenumber2;
      this.driver.sector = this.form2.value.sector2;
      this.driverService.updateDriver(this.driver).subscribe((data) => {
        console.log(data);
      });

      this.dialogRef.close();
    });
  }
}
