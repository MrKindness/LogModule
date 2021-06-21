import { Component, OnDestroy } from '@angular/core';
import { LogService } from '../../services/LogService';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarNotification, SnackBarType } from '../../types/SnackBarType';
import { SnackBarComponent } from '../SnackBar/SnackBar.component';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { NewNotificationAction } from '../../store/actions/notifications.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AreNewNotificationsSelector,
} from '../../store/reducers/notifications.reducer';

@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './MatSnackBar.component.html',
  styleUrls: ['./MatSnackBar.component.scss'],
})
export class MatSnackBarComponent implements OnDestroy {
  AreNewNotifications$: Observable<boolean>;
  EventserviceSub$;

  constructor(
    private EventService: LogService,
    private SnackBar: MatSnackBar,
    private router: Router,
    private store: Store,
  ) {

    this.AreNewNotifications$ = this.store.pipe(
      select(AreNewNotificationsSelector)
    );
    this.EventserviceSub$ = this.EventService.NewNotication.subscribe({
      next: (notification: SnackBarNotification) => {
        this.store.dispatch(NewNotificationAction(notification));
        this.SnackBar.openFromComponent(SnackBarComponent, {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          data: { message: notification.data, buttonText: 'Подробнее' },
          panelClass: SnackBarType[notification.NotificationType],
        });
      },
      error: () => {},
    });
  }
  ngOnDestroy(): void {
    this.EventserviceSub$.unsubscribe();
  }

  HistoryClick(): void {
    this.router.navigate(['NotificationHistory']);
  }

  HomeClick(): void {
    this.router.navigate(['/']);
  }
}
