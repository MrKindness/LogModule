import { createAction, props } from '@ngrx/store';
import {
  DisplayStartPosition,
  SnackBarNotification,
  SnackBarNotificationsArray,
} from '../../types/SnackBarType';

export const NewNotificationAction = createAction(
  '[NOTIFICATIONS] NewNotification',
  props<SnackBarNotification>()
);

export const OpenNotificationsPageAction = createAction(
  '[NOTIFICATIONS] NotificationsPageOpened'
);

export const CloseNotificationPage = createAction(
  '[NOTIFICATIONS] NotificationPageClosed'
);

export const DownloadedNotificationsAction = createAction(
  '[NOTIFICATIONS] NotificationsDownloaded',
  props<SnackBarNotificationsArray>()
);

export const ChangeStartPosition = createAction(
  '[NOTIFICATIONS] ChangePosition',
  props<DisplayStartPosition>()
);
