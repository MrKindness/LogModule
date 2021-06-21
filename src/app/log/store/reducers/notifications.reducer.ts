import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import {
  DisplayStartPosition,
  SnackBarNotification,
  SnackBarNotificationsArray,
} from '../../types/SnackBarType';
import {
  ChangeStartPosition,
  CloseNotificationPage,
  DownloadedNotificationsAction,
  NewNotificationAction,
  OpenNotificationsPageAction,
} from '../actions/notifications.actions';

export interface NotificationsState {
  NotificationsList: Array<SnackBarNotification>;
  AreNewNotifications: boolean;
  AreOpenedNotificationPage: boolean;
  DisplayStartPosition: number;
}

export const initialState: NotificationsState = {
  NotificationsList: [],
  AreNewNotifications: false,
  AreOpenedNotificationPage: false,
  DisplayStartPosition: 0,
};

export const NotificationsReducer = createReducer(
  initialState,
  on(NewNotificationAction, (state, NewNotification: SnackBarNotification) => {
    return {
      ...state,
      NotificationsList: [NewNotification, ...state.NotificationsList],
      AreNewNotifications: state.AreOpenedNotificationPage ? false : true,
    };
  }),
  on(OpenNotificationsPageAction, (state) => {
    console.log('in reducer open page');
    return {
      ...state,
      AreNewNotifications: false,
      AreOpenedNotificationPage: true,
    };
  }),
  on(
    DownloadedNotificationsAction,
    (state, NewNotifications: SnackBarNotificationsArray) => {
      return {
        ...state,
        NotificationsList: [
          ...state.NotificationsList,
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
  on(ChangeStartPosition, (state, data: DisplayStartPosition) => {
    return {
      ...state,
      DisplayStartPosition: data.StartPosition,
    };
  })
);

const featureSelector =
  createFeatureSelector<NotificationsState>('Notifications');

export const NotificationsListSelector = createSelector(
  featureSelector,
  (state) => {
    return state.NotificationsList[0];
  }
);
export const AreNewNotificationsSelector = createSelector(
  featureSelector,
  (state) => {
    return state.AreNewNotifications;
  }
);
