import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepairOnecontentComponent } from './repair-onecontent.component';

const routes: Routes = [{ path: '', component: RepairOnecontentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairOnecontentRoutingModule {}
