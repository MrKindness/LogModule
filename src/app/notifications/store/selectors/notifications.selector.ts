import { NotificationsState } from '../reducers/notifications.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const featureSelector =
  createFeatureSelector<NotificationsState>('Notifications');

export const NewNotificationSelector = createSelector(
  featureSelector,
  (state) => {
    return state.LastNewNotification;
  }
);

export const NotificationsSelector = createSelector(
  featureSelector,
  (state) => {
    return state.NotificationsList;
  }
);

export const LastDownloadedNotificationsSelector = createSelector(
  featureSelector,
  (state) => {
    return state.LastDownloadedNotifications;
  }
);

export const AreNewNotificationsSelector = createSelector(
  featureSelector,
  (state) => {
    return state.AreNewNotifications;
  }
);
