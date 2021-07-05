import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  MatSnackBarNotification,
  MatSnackBarNotificationServer,
} from '../types/MatSnackBarType';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/notifications';

  PostNewNotification(data: MatSnackBarNotification) {
    return this.http.post(this.url, data);
  }

  InitializeHistoryNotifications(amount: number) {
    // let data = {
    //   params: {
    //     _start: 24,
    //     _end: 45,
    //     _sort: 'id',
    //     _order: 'desc',
    //   },
    // };
    // .pipe(
    //   map((mass: []) => {
    //     return mass.reverse;
    //   })
    // );
  }

  getHistoryNotifications(start: number, amount: number) {
    // if (start === undefined) {
    //   let data = {
    //     params: {
    //       _start: 0,
    //       _limit: amount,
    //       _sort: 'id',
    //       _order: 'desc',
    //     },
    //   };
    //   return this.http.get(this.url, data);
    // } else {
    //   let data = {
    //     params: {
    //       _start: start - amount - 1 >= 0 ? start - amount - 1 : 0,
    //       _limit: amount,
    //       _sort: '',
    //       _order: '',
    //     },
    //   };

    //   return this.http
    //     .get(this.url, data)
    //     .pipe(map((mass: Array<MatSnackBarNotificationServer>) => mass.reverse()));

    let data = {
      params: {
        _start:
          start === undefined || start - amount - 1 < 0
            ? 0
            : start - amount - 1,
        _limit: amount,
        _sort: start === undefined ? 'id' : '',
        _order: start === undefined ? 'desc' : '',
      },
    };

    return this.http.get(this.url, data).pipe(
      map((mass: Array<MatSnackBarNotificationServer>) => {
        if (start === undefined) {
          return mass;
        } else {
          return mass.reverse();
        }
      })
    );
  }
}
