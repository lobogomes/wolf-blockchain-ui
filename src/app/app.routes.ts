import { Routes } from '@angular/router';
import { MainComponent } from '@shared-components/layouts/main/main.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('@pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@pages/auth/login/login.component').then(
            (m) => m.LoginComponent,
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('@pages/auth/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
      },
    ],
  },
  {
    path: '',
    component: MainComponent,
    // colocar um AuthGuard aqui futuramente
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('@pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'theme-playground',
        loadComponent: () =>
          import('@pages/theme-playground/theme-playground.component').then(
            (m) => m.ThemePlaygroundComponent,
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@pages/settings/settings.component').then(
            (m) => m.SettingsComponent,
          ),
      },
    ],
  },
];
