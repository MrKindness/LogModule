import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { WebService } from '../../services/WebService';
import {
  MatSnackBarNotification,
  MatSnackBarArray,
} from '../../types/MatSnackBarType';
import {
  DownloadedNotificationsAction,
  NewNotificationAction,
  OpenNotificationsPageAction,
} from '../actions/notifications.actions';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions, private webService: WebService) {}

  NewNotificationEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NewNotificationAction),
        switchMap((data: MatSnackBarNotification) => {
          const obj: MatSnackBarNotification = {
            NotificationType: data.NotificationType,
            data: data.data,
            time: data.time,
          };
          return this.webService.PostNotification(obj).pipe(
            map((event) => {
              console.log('From new notification effect!');
              console.log(event);
            })
          );
        })
      ),
    { dispatch: false }
  );

  PageOpenedEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(OpenNotificationsPageAction),
        switchMap(() => {
          return this.webService.getNotifications().pipe(
            map((event: MatSnackBarNotification[]) => {
              console.log('server response from pipe');
              console.log(event);
              return DownloadedNotificationsAction({ array: event });
            })
          );
        })
      ),
  );
}
