import { Observable, Subject } from 'rxjs';

export class LogService {
  NewNotication = new Subject();

  ShowNotification(): void {
    this.NewNotication.next();
  }
}
