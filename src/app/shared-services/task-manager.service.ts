import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../shared-models/task-manager/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  public taskStatusChangeEmitter: EventEmitter<Task> = new EventEmitter();
  
  constructor() { }
}
