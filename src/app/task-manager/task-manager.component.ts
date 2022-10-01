import { Component, OnInit } from '@angular/core';
import { TableArea } from '../shared-models/task-manager/table-area.model';
import { Task } from '../shared-models/task-manager/task.model';
import { TaskManagerService } from '../shared-services/task-manager.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  taskList: TableArea = new TableArea();

  constructor(private managerService: TaskManagerService) { }

  ngOnInit(): void {
    
    this.managerService.taskStatusChangeEmitter.subscribe((request: Task) => {
      var indexOfElement = this.taskList.toDo.findIndex(item => item.id == request.id);
      if(indexOfElement >= 0) {
        this.taskList.toDo.splice(indexOfElement, 1);
      } else {
        indexOfElement = this.taskList.inProgress.findIndex(item => item.id == request.id);
        if (indexOfElement >= 0) {
          this.taskList.inProgress.splice(indexOfElement, 1);
        } else {
          indexOfElement = this.taskList.done.findIndex(item => item.id == request.id);
          this.taskList.done.splice(indexOfElement, 1);
        }
      }
      this.taskList.addNewTask(request);
    })
  }

  onTaskSaveSubscribe(task: Task) {
    this.taskList.addNewTask(task);
    console.log(this.taskList);
  }

}
