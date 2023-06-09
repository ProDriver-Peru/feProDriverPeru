import { User } from './User';

export class Driver {
  id: number;
  employed: boolean;
  licenseType: string;
  license: string;
  user: User = new User();

  constructor() {}
}
