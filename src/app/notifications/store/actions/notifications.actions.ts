import { createAction, props } from '@ngrx/store';
import {
  MatSnackBarNotification,
  MatSnackBarNotificationServer,
} from '../../types/MatSnackBarType';

export const NewNotificationAction = createAction(
  '[NOTIFICATIONS] NewNotificationAction',
  props<MatSnackBarNotification>()
);

export const DownloadedNewNotificationAction = createAction(
  '[NOTIFICATIONS] DownloadedNewNotificationAction',
  props<MatSnackBarNotificationServer>()
);

export const OpenNotificationsPageAction = createAction(
  '[NOTIFICATIONS] NotificationsPageOpened'
);

export const DownloadedNotifications = createAction(
  '[NOTIFICATIONS] DownloadedNotificationsList',
  props<{ array: MatSnackBarNotificationServer[], PageOpenedAction: boolean }>()
);

export const CloseNotificationPageAction = createAction(
  '[NOTIFICATIONS] NotificationPageClosed'
);

export const ScrollAction = createAction(
  '[NOTIFICATIONS] ScrollEvent',
  props<{ LastNotificationId: string, LastNotificationTime: number }>()
);

