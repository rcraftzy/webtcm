import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './views/website/website.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./admin/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./admin/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./views/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'repairs',
        loadChildren: () =>
          import('./views/reparaciones/reparaciones.module').then(
            (m) => m.ReparacionesModule,
          ),
      },
      {
        path: 'our-content',
        loadChildren: () =>
          import('./views/our-content/our-content.module').then(
            (m) => m.OurContentModule,
          ),
      },
      {
        path: 'our-repairsone/:id',
        loadChildren: () =>
          import('./views/repair-onecontent/repair-onecontent.module').then(
            (m) => m.RepairOnecontentModule,
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./views/products/products.module').then(
            (m) => m.ProductsModule,
          ),
      },
      {
        path: 'termsconditions',
        loadChildren: () =>
          import(
            './views/terms-and-conditions/terms-and-conditions.module'
          ).then((m) => m.TermsAndConditionsModule),
      },
      {
        path: 'privacypolicies',
        loadChildren: () =>
          import('./views/privacy-policies/privacy-policies.module').then(
            (m) => m.PrivacyPoliciesModule,
          ),
      },
      {
        path: 'mission&vision',
        loadChildren: () =>
          import('./views/mission/mission.module').then((m) => m.MissionModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
