import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ArtistService } from './service/artist.service';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistTracksComponent } from './artist-tracks/artist-tracks.component';
import { CountryListComponent } from './country-list/country-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  params;
  countryParam;
  selectedCountry: string;
  loadTracks: boolean = false;
  selectedArtist: string;
  @ViewChild('artists') artists: ArtistListComponent;
  @ViewChild('tracks') tracks: ArtistTracksComponent;

  constructor(private artistService: ArtistService) {
    this.title = 'My FM';
    this.params = {onClick: this.onBandClick.bind(this)};
    this.countryParam = {onClick: this.onCountrySelect.bind(this)};
  }

  ngOnInit() {
    //this.loadArtists("Spain");
  }

  onCountrySelect(selectedCountry) {
    //this.loadTracks = false;
    this.selectedCountry = selectedCountry;
    console.log("load") + this.selectedCountry;
    if(this.selectedCountry && this.selectedCountry != ""){
      console.log("load inside") + this.selectedCountry;
      this.loadArtists(this.selectedCountry);
    }
  }

  onBandClick(params) {
    this.loadTracks = true;
    this.selectedArtist = params.rowData.name;
    this.loadArtistTracks(params);
  }

  onBackClick() {
    this.loadTracks = false;
    this.selectedCountry = "";
    //this.loadArtists(this.selectedCountry);
  }

  loadArtists(selectedCountry){
    this.artistService.findAll(selectedCountry).subscribe(data => {
            this.artists.artistList = data;
          });
  }

  loadArtistTracks(params){
    this.artistService.findAllTracks(params).subscribe(data => {
              this.tracks.artistTracks = data;
        });
  }


}
