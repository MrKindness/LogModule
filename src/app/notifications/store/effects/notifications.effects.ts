import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { WebService } from '../../services/WebService';
import {
  MatSnackBarNotification,
  MatSnackBarNotificationServer,
} from '../../types/MatSnackBarType';
import {
  DownloadedInitializeNotifications,
  DownloadedNewNotificationAction,
  NewNotificationAction,
  OpenNotificationsPageAction,
} from '../actions/notifications.actions';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions, private webService: WebService) {}
  RequestAmount = 10;

  NewNotificationEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewNotificationAction),
      switchMap((data: MatSnackBarNotification) => {
        const obj: MatSnackBarNotification = {
          NotificationType: data.NotificationType,
          data: data.data,
          time: data.time,
        };
        return this.webService.PostNewNotification(obj).pipe(
          map((event: MatSnackBarNotificationServer) => {
            console.log('page opened action');
            return DownloadedNewNotificationAction(event);
          })
        );
      })
    )
  );

  PageOpenedEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(OpenNotificationsPageAction),
        switchMap(() => {
          return this.webService
            .InitializeHistoryNotifications(this.RequestAmount)
            .pipe(
              map((event: MatSnackBarNotificationServer[]) => {
                return DownloadedInitializeNotifications({ array: event });
              })
            );
        })
      )
  );
}
