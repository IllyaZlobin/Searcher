import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { StarRatingModule } from 'angular-star-rating';

import { NavbarComponent } from './components';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register/register.component';
import { PasswordFormComponent } from './components/password-form/password-form.component';
const ANGULAR_MATERIAL_COMPONENTS = [
  MatCardModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
];

const PRIMENG_COMPONENTS = [
  CardModule,
  TabViewModule,
  ButtonModule,
  RatingModule,
];

const COMPONENTS = [
  NavbarComponent,
  LoginComponent,
  RegisterComponent,
  PasswordFormComponent,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
    ...PRIMENG_COMPONENTS,
    FlexLayoutModule,
    FormsModule,
    NgxMatSelectSearchModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
    ...PRIMENG_COMPONENTS,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    // LoadingSpinnerComponent,
    NgxPaginationModule,
    ...COMPONENTS,
    NgxMatSelectSearchModule,
  ],
  declarations: [...COMPONENTS],
})
export class SharedModule {}
