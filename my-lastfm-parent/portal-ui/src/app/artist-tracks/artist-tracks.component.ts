import { Component, OnInit } from '@angular/core';
import { Tracks } from '../model/tracks';
import { ButtonRendererComponent } from '../renderer/button-renderer.component';

@Component({
  selector: 'app-artist-tracks',
  templateUrl: './artist-tracks.component.html',
  styleUrls: ['./artist-tracks.component.css']
})
export class ArtistTracksComponent implements OnInit {
  artistTracks: Tracks[];
  frameworkComponents: any;
  gridOptions: any;
  columnDefs = [{headerName: '',
                field: 'imageUrl', width:100,
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                  onClick: this.onImgClick.bind(this)
                }
        },
        {headerName: 'Rank', field: 'attr.rank', width:100},
        {headerName: 'Name', field: 'name', width:500 },
        {headerName: 'Play count', field: 'playCount', width:200},
        {headerName: 'Listeners', field: 'listeners', width:200}];
  defaultColDef = {autoHeight:'true', autoWidth:'true', rowHeight: 100, resizable: true};

  constructor() {
    this.frameworkComponents = {
        buttonRenderer: ButtonRendererComponent,
      }
    this.gridOptions = [{context:{componentParent: this}}];
    this.gridOptions.rowClass =  'fm-row';
  }

  ngOnInit() {
  }

  onImgClick(e) {
    //Do Nothing
  }
}
