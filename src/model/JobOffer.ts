import { Employer } from "./Employer";

export class JobOffer {
  id: number;
  description: string;
  licenseTypeRequired: string;
  experienceYearsRequired: number;
  appliers: number;
  vehicle: string;
  idEmployer: Employer;
}

/*
    "id": 0,
    "description": "string",
    "licensetyperequired": "string",
    "experienceyears": 0,
    "appliers": 0,
    "vehicle": "string",
    "idEmployer": {
      "id": 0,
      "rol": "string",
      "dni": "string",
      "name": "string",
      "lastName": "string",
      "email": "string",
      "password": "string",
      "dateOfBirth": "2023-06-17",
      "plan": "string",
      "description": "string"
    }
  }
*/
