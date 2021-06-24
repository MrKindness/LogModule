import { createAction, props } from '@ngrx/store';
import {
  MatSnackBarNotification,
  MatSnackBarArray,
} from '../../types/MatSnackBarType';

export const NewNotificationAction = createAction(
  '[NOTIFICATIONS] NewNotification',
  props<MatSnackBarNotification>()
);

export const OpenNotificationsPageAction = createAction(
  '[NOTIFICATIONS] NotificationsPageOpened'
);

export const CloseNotificationPage = createAction(
  '[NOTIFICATIONS] NotificationPageClosed'
);

export const DownloadedNotificationsAction = createAction(
  '[NOTIFICATIONS] NotificationsDownloaded',
  props<MatSnackBarArray>()
);
