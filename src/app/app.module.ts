import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    GenderPipe,
    SeemorePipe,
    SearchPipe,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
