import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/model/User';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  mensaje: string = "";
  step: number = 0;
  @ViewChild(MatSelect) select: MatSelect;

  constructor(private authService:AuthService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {

    this.form = new FormGroup({

      id: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      rol: new FormControl('', Validators.required),

      dni: new FormControl('',Validators.required),
      firstname: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),

      ruc: new FormControl('',Validators.required)
    })
  }

  submit():void{

    this.user.id = this.form.value['id'];  //username
    this.user.password = this.form.value['password'];
    this.user.rol = "Reclutador"; //this.form.value['rol'];

    this.user.name = this.form.value['firstname'];
    this.user.lastname = this.form.value['lastname'];
    this.user.email = this.form.value['email'];



    if (this.form.valid) {

      this.authService.register(this.user).subscribe(data=>{
          this.router.navigate(['login']).then(()=>{
            window.location.reload()
          })
      })

    }

  }
  next():void{
    this.step++;
    console.log(this.select.value);

  }

  back():void{
    this.step--;
  }

}
