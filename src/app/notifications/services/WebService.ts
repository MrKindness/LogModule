import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatSnackBarNotification } from '../types/MatSnackBarType';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/notifications';

  PostNewNotification(data: MatSnackBarNotification) {
    return this.http.post(this.url, data);
  }

  InitializeHistoryNotifications(amount: number) {
    let data = {
      params: {
        _start: 0,
        _limit: amount,
        _sort: 'id',
        _order: 'desc',
      },
    };
    // let data = {
    //   params: {
    //     _start: 24,
    //     _end: 45,
    //     _sort: 'id',
    //     _order: 'desc',
    //   },
    // };
    return this.http.get(this.url, data);
    // .pipe(
    //   map((mass: []) => {
    //     return mass.reverse;
    //   })
    // );
  }

  getHistoryNotifications(start: number, amount: number) {}
}
