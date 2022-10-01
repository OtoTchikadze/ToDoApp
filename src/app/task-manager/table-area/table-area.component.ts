import { Component, Input, OnInit, Output } from '@angular/core';
import { TableArea } from 'src/app/shared-models/task-manager/table-area.model';

@Component({
  selector: 'app-table-area',
  templateUrl: './table-area.component.html',
  styleUrls: ['./table-area.component.css']
})
export class TableAreaComponent implements OnInit {
  @Input()
  tableArea: TableArea = new TableArea();
  constructor() { }

  ngOnInit(): void {
  }

  onRemoveFromToDo($event : any) {
    let findIt = this.tableArea.toDo.findIndex((e) => e.id === $event);
    this.tableArea.toDo.splice(findIt, 1);
  }

  onRemoveFromInProgress($event : any) {
    let findIt = this.tableArea.inProgress.findIndex((e) => e.id === $event);
    this.tableArea.inProgress.splice(findIt, 1);
  }

  onRemoveFromDone($event : any) {
    let findIt = this.tableArea.done.findIndex((e) => e.id === $event);
   this.tableArea.done.splice(findIt, 1);
  }

}
