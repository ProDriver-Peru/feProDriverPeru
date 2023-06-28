import { User } from './User';

export class Driver {
  id: number;
  user: User = new User();
  employed: boolean;
  licenseType: string;
  license: string;
  sector: string;
  constructor() {}
}
