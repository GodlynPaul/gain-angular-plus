import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const MainRoute: Routes = [
  {
    path: 'register',
    pathMatch: 'prefix',
    loadChildren: './registration/registration.module#RegistrationModule'
  },
  {
    path:'login/:user',
    component:LoginComponent
  },
  {
    path: '',
    redirectTo: '**',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const MainRoutes: ModuleWithProviders = RouterModule.forRoot(MainRoute);
