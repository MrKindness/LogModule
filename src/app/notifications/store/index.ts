import { ActionReducerMap } from '@ngrx/store';
import {
  NotificationsReducer,
  NotificationsState,
} from './reducers/notifications.reducer';

export interface State {
  Notifications: NotificationsState;
}

export const LogReducers: ActionReducerMap<State> = {
  Notifications: NotificationsReducer,
};
