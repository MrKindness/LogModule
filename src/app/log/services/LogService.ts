import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackBarNotification } from '../types/SnackBarType';

@Injectable()
export class LogService {
  NewNotication = new Subject<SnackBarNotification>();

  ShowNotification(Type: SnackBarNotification): void {
    console.log('from log service');
    this.NewNotication.next(Type);
  }
}
