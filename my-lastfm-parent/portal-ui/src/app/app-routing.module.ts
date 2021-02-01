import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistTracksComponent } from './artist-tracks/artist-tracks.component';

const routes: Routes = [
  { path: 'listArtist', component: ArtistListComponent },
  { path: 'showArtist', component: ArtistTracksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
