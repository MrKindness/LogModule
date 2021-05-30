import { NgModule } from '@angular/core';
import {LogGeneralComponent } from './components/logGeneral/logGeneral.component';
import {MatSnackBarComponent } from './components/MatSnackBar/MatSnackBar.component';

@NgModule({
  declarations: [LogGeneralComponent, MatSnackBarComponent],
  imports: [],
  providers: [],
  exports: [LogGeneralComponent, MatSnackBarComponent],
})
export class LogModule {}
