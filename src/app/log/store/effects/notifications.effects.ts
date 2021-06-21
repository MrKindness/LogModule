import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { WebService } from '../../services/WebService';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions, private WebService: WebService) {}

  NewNotificationEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        map((event) => console.log('hello from effect!', event))
        // map((event) => this.authService.CheckLogin(event)),
        // filter((event) => event.success),
        // map((event: AuthResult) => LogInSuccess(event.account!))
      ),
    { dispatch: false }
  );
}
