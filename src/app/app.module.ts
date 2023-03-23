import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, StarRatingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
