import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/components/home';
import { LoginComponent } from './shared/components/login';
import { AuthGuard } from './core/guards';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
