import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { ReparacionesComponent } from './views/reparaciones/reparaciones.component';
import { OurContentComponent } from './views/our-content/our-content.component';
import { RepairOnecontentComponent } from './views/repair-onecontent/repair-onecontent.component';
import { ProductsComponent } from './views/products/products.component';
import { TermsAndConditionsComponent } from './views/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPoliciesComponent } from './views/privacy-policies/privacy-policies.component';

import { MissionComponent } from './views/mission/mission.component';
const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'repairs',component:ReparacionesComponent},
  {path:'our-content',component:OurContentComponent},
  {path:'our-repairsone/:id',component:RepairOnecontentComponent},
  {path:'products',component:ProductsComponent},
  {path:'termsconditions',component:TermsAndConditionsComponent},
  {path:'privacypolicies',component:PrivacyPoliciesComponent},
  {path:'mission&vision',component:MissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainComponent,ReparacionesComponent,OurContentComponent,RepairOnecontentComponent,ProductsComponent,PrivacyPoliciesComponent,MissionComponent,TermsAndConditionsComponent ]