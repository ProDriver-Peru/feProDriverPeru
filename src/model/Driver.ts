import { User } from './User';

export class Driver {
  id: number;
  user: User = new User();
  employed: boolean;//autoasigned NEEDS TO BE ABLE TO CHANGE
  licensetype: string;//done
  license: string;//done
  sector: string;//done
  constructor() {}
}
