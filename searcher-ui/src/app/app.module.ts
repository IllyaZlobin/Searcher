import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { faCoffee, faFilm } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './home/home.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MoviesComponent } from './movies/movies.component';
import { NouisliderModule } from 'ng2-nouislider';
import { LazyLoadScriptService } from './lazyloadscript.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    NouisliderModule,
    BrowserModule,
    MegaMenuModule,
    FontAwesomeModule,
    MenubarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [LazyLoadScriptService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee, faFilm);
  }
 }
