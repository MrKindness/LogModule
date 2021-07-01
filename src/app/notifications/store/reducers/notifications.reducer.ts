import { createReducer, on } from '@ngrx/store';
import { MatSnackBarNotificationServer } from '../../types/MatSnackBarType';
import {
  CloseNotificationPageAction,
  DownloadedInitializeNotifications,
  DownloadedNewNotificationAction,
} from '../actions/notifications.actions';

export interface NotificationsState {
  // Общее хранилище всех загруженных уведомлений
  NotificationsList: Array<MatSnackBarNotificationServer>;
  // Необходимо для отображения иконки непрочитанных уведомлений
  AreNewNotifications: boolean;
  // Необходимо чтобы помечать новые уведомления как прочитанные, если стараница уведомлений открыта
  AreOpenedNotificationPage: boolean;
}

export const initialState: NotificationsState = {
  NotificationsList: [],
  AreNewNotifications: false,
  AreOpenedNotificationPage: false,
};

export const NotificationsReducer = createReducer(
  initialState,
  on(
    DownloadedNewNotificationAction,
    (state, NewNotification: MatSnackBarNotificationServer) => {
      return {
        ...state,
        NotificationsList: [NewNotification, ...state.NotificationsList],
        AreNewNotifications: state.AreOpenedNotificationPage ? false : true,
      };
    }
  ),
  on(
    // данное событие всегда вызывается после открытия страницы уведомлений
    DownloadedInitializeNotifications,
    (state, Notifications: { array: MatSnackBarNotificationServer[] }) => {
      return {
        ...state,
        NotificationsList: Notifications.array,
        AreNewNotifications: false,
        AreOpenedNotificationPage: true,
      };
    }
  ),
  on(CloseNotificationPageAction, (state) => {
    return {
      ...state,
      AreOpenedNotificationPage: false,
    };
  })
);
