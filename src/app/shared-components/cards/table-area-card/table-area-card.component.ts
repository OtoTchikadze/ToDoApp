import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableArea } from 'src/app/shared-models/task-manager/table-area.model';
import { Task } from 'src/app/shared-models/task-manager/task.model';
import { TaskType } from 'src/app/shared-models/task-manager/tasks-type.model';
import { TaskManagerService } from 'src/app/shared-services/task-manager.service';

@Component({
  selector: 'app-table-area-card',
  templateUrl: './table-area-card.component.html',
  styleUrls: ['./table-area-card.component.css']
})
export class TableAreaCardComponent implements OnInit {
  @Input() taskItem: Task = new Task();

  @Output() removedItem = new EventEmitter<any>();

  constructor(private managerService: TaskManagerService) { }

  ngOnInit(): void {
  }

  onSelectValueChange(event: Event) {
    var val: number = Number((event.target as HTMLSelectElement).value);
    this.taskItem.type = val;
    this.managerService.taskStatusChangeEmitter.emit(this.taskItem);
  }

  removeListItem() {
    this.removedItem.emit(this.taskItem.id);
  }
}


