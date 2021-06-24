import { Component, OnDestroy } from '@angular/core';
import { NotificationsService } from '../../services/NotificationsService';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatSnackBarNotification,
  MatSnackBarType,
} from '../../types/MatSnackBarType';
import { MatSnackBarComponent } from '../MatSnackBar/MatSnackBar.component';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { NewNotificationAction } from '../../store/actions/notifications.actions';
import { Observable } from 'rxjs';
import { AreNewNotificationsSelector } from '../../store/reducers/notifications.reducer';

@Component({
  selector: 'app-notifications-panel',
  templateUrl: './NotificationsPanel.component.html',
  styleUrls: ['./NotificationsPanel.component.scss'],
})
export class NotificationsPanelComponent implements OnDestroy {
  AreNewNotifications$: Observable<boolean> | undefined;
  EventserviceSub$: any;

  constructor(
    private EventService: NotificationsService,
    private SnackBar: MatSnackBar,
    private router: Router,
    private store: Store
  ) {
    this.AreNewNotifications$ = this.store.pipe(
      select(AreNewNotificationsSelector)
    );
    this.EventserviceSub$ = this.EventService.NewNotication.subscribe({
      next: (notification: MatSnackBarNotification) => {
        this.store.dispatch(NewNotificationAction(notification));
        this.SnackBar.openFromComponent(MatSnackBarComponent, {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          data: { message: notification.data, buttonText: 'Подробнее' },
          panelClass: MatSnackBarType[notification.NotificationType],
        });
      },
      error: () => {},
    });
  }
  ngOnDestroy(): void {
    this.EventserviceSub$.unsubscribe();
  }

  HistoryClick(): void {
    this.router.navigate(['NotificationsPage']);
  }

  HomeClick(): void {
    this.router.navigate(['/']);
  }
}
