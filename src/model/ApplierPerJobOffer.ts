import { JobOffer } from './JobOffer';
import { User } from './User';

export class Applierperjoboffer {
  id: number;
  idJoboffer: JobOffer = new JobOffer();
  idDriver: User = new User();
  status: string;
  timestamp: Date;
  constructor() {}
}
