import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NotificationsPageComponent } from './components/NotificationsPage/NotificationsPage.component';
import { MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';
import { NotificationsService } from './services/NotificationsService';
import { WebService } from './services/WebService';
import { NotificationsEffects } from './store/effects/notifications.effects';
import { NotificationsReducer } from './store/reducers/notifications.reducer';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { NotificationsPanelComponent } from './components/NotificationsPanel/NotificationsPanel.component';

const routes: Routes = [
  { path: 'NotificationsPage', component: NotificationsPageComponent },
];

@NgModule({
  declarations: [
    MatSnackBarComponent,
    NotificationsPageComponent,
    NotificationsPanelComponent,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTableModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('Notifications', NotificationsReducer),
    EffectsModule.forFeature([NotificationsEffects]),
  ],
  providers: [NotificationsService, WebService],
  exports: [NotificationsPanelComponent],
})
export class NotificationsModule {}
