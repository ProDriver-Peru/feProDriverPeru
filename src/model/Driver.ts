import { User } from './User';

export class Driver {
  id: number;
  user: User = new User();
  employed: boolean;
  licensetype: string;
  license: string;
  sector: string;
  yearsExperience: number;
  constructor() {}
}
