import { User } from './User';

export class Notification {
  id: number;
  content: string;
  timestamp: string;
  userDriver: User;
  userEmployer: User;
  ruc: string;
}
