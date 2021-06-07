import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SnackBarType } from '../types/SnackBarType';

export class LogService {
  NewNotication = new Subject<SnackBarType>();

  ShowNotification(Type: SnackBarType): void {
    this.NewNotication.next(Type);
  }
}
