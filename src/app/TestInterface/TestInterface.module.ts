import { NgModule } from '@angular/core';
import { LogService } from '../log/services/LogService';
import { TestComponent } from './components/test/test.components';

@NgModule({
  declarations: [TestComponent],
  providers: [],
  imports: [],
  exports: [TestComponent]
})
export class TestInteraceModule {}
