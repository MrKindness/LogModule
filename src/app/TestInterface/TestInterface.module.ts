import { NgModule } from '@angular/core';
import { MatSnackBarService } from '../log/services/MatSnackBar.service';
import { TestComponent } from './components/test/test.components';

@NgModule({
  declarations: [TestComponent],
  providers: [],
  imports: [],
  exports: [TestComponent]
})
export class TestInteraceModule {}
