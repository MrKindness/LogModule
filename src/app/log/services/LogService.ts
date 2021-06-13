import { Subject } from 'rxjs';
import { SnackBarNotification } from '../types/SnackBarType';

export class LogService {
  NewNotication = new Subject<SnackBarNotification>();

  ShowNotification(Type: SnackBarNotification): void {
    this.NewNotication.next(Type);
  }
}
