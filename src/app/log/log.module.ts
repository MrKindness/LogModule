import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LogPageComponent } from './components/LogPage/LogPage.component';
import { MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';
import { SnackBarComponent } from './components/SnackBar/SnackBar.component';
import { LogService } from './services/LogService';
import { WebService } from './services/WebService';
import { NotificationsEffects } from './store/effects/notifications.effects';
import { NotificationsReducer } from './store/reducers/notifications.reducer';

const routes: Routes = [
  { path: 'NotificationHistory', component: LogPageComponent },
];

@NgModule({
  declarations: [MatSnackBarComponent, SnackBarComponent, LogPageComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatTableModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('Notifications', NotificationsReducer),
    EffectsModule.forFeature([NotificationsEffects])
  ],
  providers: [LogService, WebService],
  exports: [MatSnackBarComponent],
})
export class LogModule {}
