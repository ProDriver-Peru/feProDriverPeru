export class User {
  id: number;
  rol: string;
  dni: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
  plan: string ="sharky";
  description: string;
  imageProfile: string = "https://i.imgur.com/tdi3NGa.png";

  constructor() {}
}
