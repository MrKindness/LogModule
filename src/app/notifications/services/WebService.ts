import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  MatSnackBarNotification,
} from '../types/MatSnackBarType';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/notifications';

  PostNewNotification(data: MatSnackBarNotification) {
    return this.http.post(this.url, data);
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
      map((mass: Array<MatSnackBarNotification>) => {
        if (start === undefined) {
          return mass;
        } else {
          return mass.reverse();
        }
      })
    );
  }
}
