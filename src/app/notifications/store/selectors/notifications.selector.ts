import { NotificationsState } from '../reducers/notifications.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const featureSelector =
  createFeatureSelector<NotificationsState>('Notifications');

export const NotificationsSelector = createSelector(
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
