import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from '../model/artist';
import { Tracks } from '../model/tracks';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArtistService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8080/';
  }

  public findAll(selectedCountry): Observable<Artist[]> {
    return this.http.get<Artist[]>('/popular-artist?country=' + selectedCountry);
  }

  public findAllTracks(params): Observable<Tracks[]> {
      //const body = {'name': params.rowData.name, 'mbid' : params.rowData.mbid};
    return this.http.get<Tracks[]>('/artist-tracks?name=' + params.rowData.name);
  }

}
