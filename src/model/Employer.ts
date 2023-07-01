import { User } from './User';

export class Employer {
  id: number;//no
  user: User = new User();
  ruc: string;//si
  imageCompany: string = "https://i.imgur.com/tdi3NGa.png";//si
  companyName: string;//si
  companyDescription: string;//si
  constructor() {}
}
