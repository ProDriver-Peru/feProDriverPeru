import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { User } from 'src/model/User';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlAuth = `${baseUrl}/auth`;

  constructor(private http:HttpClient, private router: Router) { }

  checkAuthentication():boolean{
    if(localStorage.getItem("userLogged")){
      return true;
    }
    return false;
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.checkAuthentication()) {
      return true; // El usuario está autenticado, permitir el acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirigir al usuario a la página de inicio de sesión si no está autenticado
      return false;
    }


  }

}
