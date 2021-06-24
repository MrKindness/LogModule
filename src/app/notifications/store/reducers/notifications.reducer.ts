import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  MatSnackBarNotification,
  MatSnackBarArray,
} from '../../types/MatSnackBarType';
import {
  CloseNotificationPage,
  DownloadedNotificationsAction,
  NewNotificationAction,
  OpenNotificationsPageAction,
} from '../actions/notifications.actions';

export interface NotificationsState {
  NotificationsList: Array<MatSnackBarNotification>;
  AreNewNotifications: boolean;
  AreOpenedNotificationPage: boolean;
}

export const initialState: NotificationsState = {
  NotificationsList: [],
  AreNewNotifications: false,
  AreOpenedNotificationPage: false,
};

export const NotificationsReducer = createReducer(
  initialState,
  on(NewNotificationAction, (state, NewNotification: MatSnackBarNotification) => {
    return {
      ...state,
      NotificationsList: [NewNotification, ...state.NotificationsList],
      AreNewNotifications: state.AreOpenedNotificationPage ? false : true,
    };
  }),
  on(OpenNotificationsPageAction, (state) => {
    return {
      ...state,
      AreNewNotifications: false,
      AreOpenedNotificationPage: true,
    };
  }),
  on(
    DownloadedNotificationsAction,
    (state, NewNotifications: MatSnackBarArray) => {
      console.log('in downloaded reducer');
      return {
        ...state,
        NotificationsList: [
          ...NewNotifications.array,
        ],
      };
    }
  ),
  on(CloseNotificationPage, (state) => {
    return {
      ...state,
      AreOpenedNotificationPage: false,
    };
  }),
);

const featureSelector =
  createFeatureSelector<NotificationsState>('Notifications');

export const NotificationsListSelector = createSelector(
  featureSelector,
  (state) => {
    return state.NotificationsList;
  }
);
export const AreNewNotificationsSelector = createSelector(
  featureSelector,
  (state) => {
    return state.AreNewNotifications;
  }
);
