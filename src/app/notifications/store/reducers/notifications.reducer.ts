import { createReducer, on } from '@ngrx/store';
import {
  MatSnackBarNotification,
} from '../../types/MatSnackBarType';
import {
  CloseNotificationPageAction,
  DownloadedNewNotificationAction,
  DownloadedNotifications,
} from '../actions/notifications.actions';

export interface NotificationsState {
  // Общее хранилище всех загруженных уведомлений
  NotificationsList: Array<MatSnackBarNotification>;
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
    (state, NewNotification: MatSnackBarNotification) => {
      return {
        ...state,
        NotificationsList: [NewNotification, ...state.NotificationsList],
        AreNewNotifications: state.AreOpenedNotificationPage ? false : true,
      };
    }
  ),
  on(
    // данное событие всегда вызывается после открытия страницы уведомлений
    DownloadedNotifications,
    (
      state,
      Notifications: {
        array: MatSnackBarNotification[],
        PageOpenedAction: boolean,
      }
    ) => {
      return {
        ...state,
        NotificationsList: Notifications.PageOpenedAction
          ? [...Notifications.array]
          : [...state.NotificationsList, ...Notifications.array],
        AreNewNotifications: Notifications.PageOpenedAction
          ? false
          : state.AreNewNotifications,
        AreOpenedNotificationPage: Notifications.PageOpenedAction
          ? true
          : state.AreOpenedNotificationPage,
      };
    }
  ),
  on(CloseNotificationPageAction, (state) => {
    return {
      ...state,
      NotificationsList: [],
      AreOpenedNotificationPage: false,
    };
  })
);
