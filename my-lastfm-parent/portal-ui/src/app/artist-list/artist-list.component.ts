import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { ButtonRendererComponent } from '../renderer/button-renderer.component';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistList: Artist[];
  frameworkComponents: any;
  gridOptions: any;
  columnDefs = [{headerName: '',
                field: 'imageUrl', width:100,
                cellRenderer: 'buttonRenderer',
                cellRendererParams: {
                  onClick: this.onBandClick.bind(this)
                }
        },
        {headerName: 'Name', field: 'name', width:500}];
  defaultColDef = {autoHeight:'true', rowHeight: 100, resizable: true};
  @Input() params;
  selectedArtist: string;
  clientQuery= {name: "", pageIndex: 0,pageSize: 20};

  constructor() {
    this.frameworkComponents = {
        buttonRenderer: ButtonRendererComponent,
      }
    this.gridOptions = [{context:{componentParent: this}}];
    this.gridOptions.rowClass =  'fm-row';
    /*this.gridOptions.rowModelType = 'infinite';
    this.gridOptions.paginationPageSize = 20;
    this.gridOptions.cacheBlockSize = 20;
    this.gridOptions.maxBlocksInCache = 1;
    this.gridOptions.suppressPaginationPanel = true;
    this.gridOptions.infiniteInitialRowCount = 20;*/
  }

  ngOnInit() {
    console.log()
  }

  /*
    gridApi: GridApi;
    columnApi: ColumnApi;

    dataSource: IDatasource = {
    rowCount: null,
    getRows: params => {
      this.artistService.loadArtists(this.clientQuery).toPromise().then(data => {
          //this.paginator.length = data.totalRecords;
          params.successCallback(data.items, data.totalRecords);
      })
    }
  }
  gridReady(event: GridReadyEvent){
    this.gridApi = event.api;
    this.columnApi = event.columnApi;
    event.api.setDatasource(this.dataSource);
  }

  pageChange(event: PageEvent) {  //this is material paginator pageChange event
    if(event.pageSize !== this.clientQuery.pageSize){
      //this is page size change block;
      this.clientQuery.pageSize = event.pageSize;
      this.clientQuery.pageIndex = 0;
      this.gridOptions.cacheBlockSize = event.pageSize;
      this.gridOptions.paginationPageSize = event.pageSize;
      this.gridApi.paginationGoToPage(0);
    } else {
      this.clientQuery.pageIndex = event.pageIndex;
      this.gridApi.paginationGoToPage(event.pageIndex);
    }
  }*/


 onBandClick(params) {
    this.selectedArtist=params.rowData.name;
    this.params.onClick(params);
  }

}
