import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="button" style="cursor: pointer;" (click)="onClick($event)"><img src="{{imageUrl}}"></button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;
  imageUrl: string;

  agInit(params): void {
    this.params = params;
    this.imageUrl = this.params.value || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        rowData: this.params.node.data
      }
      this.params.onClick(params);

    }
  }
}
