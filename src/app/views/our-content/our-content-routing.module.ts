import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurContentComponent } from './our-content.component';

const routes: Routes = [
  {
    path: '',
    component: OurContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurContentRoutingModule {}
