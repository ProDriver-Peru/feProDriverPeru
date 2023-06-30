//import { User } from './User';
import { Driver } from './Driver';
import { Employer } from './Employer';

export class Notification {
  id: number;
  content: string;
  timestamp: Date;
  idUserDriver: Driver;
  idUserEmployer: Employer;
  ruc: string;
  imageCompany: string;
  companyName: string;
  companyDescription: string;
}
