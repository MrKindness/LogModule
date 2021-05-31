import { Observable, Subject } from 'rxjs';

export class MatSnackBarService {
  NewNotication = new Subject();

  ShowNotification(): void {
    this.NewNotication.next();
  }
}
