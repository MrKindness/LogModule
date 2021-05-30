import { NgModule } from '@angular/core';
import { logGeneral } from './components/logGeneral/logGeneral.component';
import { MatSnackBar } from './components/MatSnackBar/MatSnackBar.component';

@NgModule({
  declarations: [logGeneral, MatSnackBar],
  imports: [],
  providers: [],
})
export class LogModule {}
