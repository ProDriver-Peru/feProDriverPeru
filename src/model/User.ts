export class User {
  id: number;
  rol : string;
  dni: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  dateOfBirth: string;
  plan: string;

  constructor(
    id: number,
    rol : string,
    dni: string,
    name: string,
    lastname: string,
    email: string,
    password: string,
    dateOfBirth: string,
    plan: string
  ) {
    this.id = id;
    this.rol = rol;
    this.dni = dni;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.plan = plan;
  }

}
