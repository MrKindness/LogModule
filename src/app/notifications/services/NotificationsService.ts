import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBarNotification } from '../types/MatSnackBarType';

@Injectable()
export class NotificationsService {
  NewNotification = new Subject<MatSnackBarNotification>();

  ShowNotification(Type: MatSnackBarNotification): void {
    this.NewNotification.next(Type);
  }
}
