import { NgModule } from '@angular/core';
import { TestComponent } from './TestComponent/test.component';

//const routes = [{ path: 'TestComponent', component: TestComponent }];

@NgModule({
  declarations: [TestComponent],
  providers: [],
  //imports: [RouterModule.forChild(routes)],
  exports: [TestComponent],
})
export class TestInterfaceModule {}
