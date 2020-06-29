import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './shared/components/home';
import { LoginComponent } from './shared/components/login';
import { AuthGuard } from './core/guards';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
