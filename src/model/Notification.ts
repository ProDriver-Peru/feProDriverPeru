import { Driver } from './Driver';
import { Employer } from './Employer';

export class Notification {
  id: number;
  content: string;
  timestamp: Date;
  idUserDriver: Driver = new Driver();
  idUserEmployer: Employer = new Employer();
}
