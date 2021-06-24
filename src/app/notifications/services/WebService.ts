import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBarNotification } from '../types/MatSnackBarType';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/notifications';

  PostNotification(data: MatSnackBarNotification) {
    return this.http.post(this.url, data);
  }

  getNotifications() {
    return this.http.get(this.url);
  }
}
