import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/shared-models/task-manager/task.model';
@Component({
  selector: 'app-filler-form',
  templateUrl: './filler-form.component.html',
  styleUrls: ['./filler-form.component.css']
})
export class FillerFormComponent implements OnInit {
  taskItem:Task = new Task();

  @Output()
  onTaskSaveEmitter: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSaveBtnClick() {
    this.onTaskSaveEmitter.emit(this.taskItem);
    this.taskItem = new Task();
  }
}
