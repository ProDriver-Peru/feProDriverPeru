import { JobOffer } from './JobOffer';
import { User } from './User';

export class Applierperjoboffer {
  id: number;
  idJobOffer: JobOffer;
  idDriver: User = new User();
  statuS: string;
  timestamp: Date;
  constructor() {}
}
