import { Observable, Subject } from 'rxjs';

export class MatSnackBarService {
  NewNotication = new Subject();

  ShowNotification(): void {
    console.log('Hello from Service!');
    this.NewNotication.next();
  }
}
