import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { logPageComponent } from './components/logPage/logPage.component';
import { MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';
import { SnackBarComponent } from './components/SnackBar/SnackBar.component';
import { LogService } from './services/LogService';

const routes: Routes = [
  { path: 'NotificationHistory', component: logPageComponent },
];

@NgModule({
  declarations: [MatSnackBarComponent, SnackBarComponent, logPageComponent],
  imports: [CommonModule, MatSnackBarModule, RouterModule.forChild(routes)],
  providers: [LogService],
  exports: [MatSnackBarComponent],
})
export class LogModule {}
