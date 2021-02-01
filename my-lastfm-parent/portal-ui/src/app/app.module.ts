import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { ArtistService } from './service/artist.service';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistTracksComponent } from './artist-tracks/artist-tracks.component';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonRendererComponent,
    ArtistListComponent,
    ArtistTracksComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
