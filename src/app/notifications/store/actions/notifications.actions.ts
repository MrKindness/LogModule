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

export const DownloadedInitializeNotifications = createAction(
  '[NOTIFICATIONS] DownloadedInitializeNotificationsList',
  props<{array: MatSnackBarNotificationServer[]}>()
);

export const CloseNotificationPageAction = createAction(
  '[NOTIFICATIONS] NotificationPageClosed'
);
