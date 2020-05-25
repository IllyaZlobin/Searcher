import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

import { NavbarComponent } from './components';
import { from } from 'rxjs';

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
];

const PRIMENG_COMPONENTS = [CardModule, TabViewModule, ButtonModule];

const COMPONENTS = [NavbarComponent];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
    ...PRIMENG_COMPONENTS,
    FlexLayoutModule,
  ],
  exports: [
    RouterModule,
    CommonModule,
    ...ANGULAR_MATERIAL_COMPONENTS,
    ...PRIMENG_COMPONENTS,
    FlexLayoutModule,
    StarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    // LoadingSpinnerComponent,
    NgxPaginationModule,
    ...COMPONENTS,
  ],
  declarations: [...COMPONENTS],
})
export class SharedModule {}
