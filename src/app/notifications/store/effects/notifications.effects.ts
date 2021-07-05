import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { WebService } from '../../services/WebService';
import {
  MatSnackBarNotification,
  MatSnackBarNotificationServer,
} from '../../types/MatSnackBarType';
import {
  DownloadedNewNotificationAction,
  DownloadedNotifications,
  NewNotificationAction,
  OpenNotificationsPageAction,
  ScrollAction,
} from '../actions/notifications.actions';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions, private webService: WebService) {}
  RequestAmount = 30;

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
            return DownloadedNewNotificationAction(event);
          })
        );
      })
    )
  );

  PageOpenedEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OpenNotificationsPageAction),
      switchMap(() => {
        return this.webService
          .getHistoryNotifications(undefined, this.RequestAmount)
          .pipe(
            map((event: MatSnackBarNotificationServer[]) => {
              return DownloadedNotifications({
                array: event,
                PageOpenedAction: true,
              });
            })
          );
      })
    )
  );

  ScrollEvent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ScrollAction),
      map((event: { end: number }) => event.end),
      distinctUntilChanged(),
      switchMap((LatestId: number) => {
        return this.webService
          .getHistoryNotifications(LatestId, this.RequestAmount)
          .pipe(
            map((event: MatSnackBarNotificationServer[]) => {
              return DownloadedNotifications({
                array: event,
                PageOpenedAction: false,
              });
            })
          );
      })
    );
  });
}
