import { Employer } from "./Employer";

export class JobOffer {
  id: number;
  description: string;
  licensetyperequired: string;
  experienceyears: number;
  appliers: number;
  vehicle: string;
  idEmployer: Employer = new Employer();
  arrangement: string;
  location: string;
  area: string;
}
