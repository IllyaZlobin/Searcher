import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './core/helpers';
import { HomeComponent } from './shared/components/home';
import { LoginComponent } from './shared/components/login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import '../styles/styles.scss';
import { MoviesModule } from './components/movies/movies.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './shared/components/register/register.component';
import { PasswordFormComponent } from './shared/components/password-form/password-form.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { NavbarComponent } from './shared/components';
import { AuthenticationService } from './core/services';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    MoviesModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    NgxMatSelectSearchModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
