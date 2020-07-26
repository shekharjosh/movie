import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MovieListingComponent } from './components/movie-listing/movie-listing.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { TextAreaComponent } from './formElement/text-area/text-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListingComponent,
    MovieDetailComponent,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressBarModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
