import { User } from './User';

export class Employer {
  id: number;
  user: User = new User();
  ruc: string;
  imageCompany: string;
  companyName: string;
  companyDescription: string;
  constructor() {}
}
