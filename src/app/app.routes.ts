import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'admins',
    loadChildren: () =>
      import('poc-mfe/AdminsModule').then((m) => m.AdminsModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
