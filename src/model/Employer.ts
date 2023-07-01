import { User } from './User';

export class Employer {
  id: number;
  user: User = new User();
  ruc: string;
  imageCompany: string = "https://i.imgur.com/tdi3NGa.png";
  companyName: string;
  companyDescription: string;
  constructor() {}
}
