import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { WebService } from '../../services/WebService';
import {
  MatSnackBarNotification,
  MatSnackBarNotificationServer,
} from '../../types/MatSnackBarType';
import {
  DownloadedNewNotificationAction,
  DownloadedNotifications,
  NewNotificationAction,
  OpenNotificationsPageAction,
  ScrollAction,
} from '../actions/notifications.actions';
import firebase from 'firebase';
import { from } from 'rxjs';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions, private webService: WebService) {
    firebase.initializeApp({
      apiKey: 'AIzaSyCLCDcZyK4_hx8OcxuYLN9KWjDgWbjwn7A',
      authDomain: 'notificationsmodule-b1e0a.firebaseapp.com',
      projectId: 'notificationsmodule-b1e0a',
    });
    this.FireStore = firebase.firestore();
  }

  RequestAmount = 30;
  FireStore;

  // NewNotificationEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(NewNotificationAction),
  //     switchMap((data: MatSnackBarNotification) => {
  //       return from(
  //         this.FireStore.collection('notifications').add({
  //           NotificationType: data.NotificationType,
  //           data: data.data,
  //           time: data.time,
  //         })
  //       ).pipe(
  //         map((event: any) => {
  //           return DownloadedNewNotificationAction({
  //             NotificationType: data.NotificationType,
  //             data: data.data,
  //             time: data.time,
  //             id: event.id,
  //           });
  //         })
  //       );
  //     })
  //   )
  // );

  // PageOpenedEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(OpenNotificationsPageAction),
  //     switchMap(() => {
  //       return from(
  //         this.FireStore.collection('notifications')
  //           .orderBy('time')
  //           .limit(this.RequestAmount)
  //           .get()
  //       ).pipe(
  //         map((querySnapshot: any) => {
  //           console.log('page opened effect');
  //           let mass: MatSnackBarNotificationServer[] = [];
  //           querySnapshot.forEach((doc) => {
  //             mass.push({ id: doc.id, ...doc.data() });
  //             console.log({ id: doc.id, ...doc.data() });
  //           });

  //           return DownloadedNotifications({
  //             array: mass.reverse(),
  //             PageOpenedAction: true,
  //           });
  //         })
  //       );
  //     })
  //   )
  // );

  PageOpenedEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(OpenNotificationsPageAction),
        switchMap(() => {
          return this.FireStore.collection('notifications')
            .limit(10)
            .orderBy('time', 'desc')
            .get()
            .then((response: any) => {
              let mass = [];
              response.forEach((one: any) => {
                mass.push({
                  id: one.id,
                  time: this.getTimeString(one.data().time),
                  timestamp: one.data().time,
                });
              });

              this.DoMassStat(mass);

              //return switchMap((mass: any) => {
                this.FireStore.collection('notifications')
                  .limit(10)
                  .orderBy('time', 'desc')
                  .startAt(mass[mass.length - 1].timestamp)
                  .get()
                  .then((response: any) => {
                    response.forEach((one: any) => {
                      mass.push({
                        id: one.id,
                        time: this.getTimeString(one.data().time),
                        timestamp: one.data().time,
                      });
                    });

                    this.DoMassStat(mass);
                  });
              //}
              //);
            });
        })
      );
    },
    { dispatch: false }
  );

  // ScrollEvent$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(ScrollAction),
  //     distinctUntilChanged(
  //       (first, second) =>
  //         first.LastNotificationId === second.LastNotificationId
  //     ),
  //     switchMap((data) => {
  //       console.log(data);
  //       return from(
  //         this.FireStore.collection('notifications')
  //           .orderBy('time', 'desc')
  //           .startAt(data.LastNotificationTime)
  //           .limit(this.RequestAmount)
  //           .get()
  //       ).pipe(
  //         map((querySnapshot: any) => {
  //           console.log('scroll effect');
  //           let mass: MatSnackBarNotificationServer[] = [];
  //           querySnapshot.forEach((doc) => {
  //             mass.push({ id: doc.id, ...doc.data() });
  //             console.log({ id: doc.id, ...doc.data() });
  //           });

  //           return DownloadedNotifications({
  //             array: mass.reverse(),
  //             PageOpenedAction: false,
  //           });
  //         })
  //       );
  //     })
  //   );
  // });

  checkIfDuplicateExists(w) {
    return new Set(w).size !== w.length;
  }

  getTimeString(num: number): string {
    let date = new Date(num);
    return (
      date.getHours() +
      '.' +
      date.getMinutes() +
      '.' +
      date.getSeconds() +
      '    ' +
      date.getDate()
    );
  }

  DoMassStat(mass) {
    console.log(mass);
    console.log('duplicates: ', this.checkIfDuplicateExists(mass));
    console.log('length', mass.length);
  }
}
