import { Task } from "./task.model";
import { TaskType } from "./tasks-type.model";

export class TableArea {
    public toDo: Task[] = [];
    public inProgress: Task[] = [];
    public done: Task[] = [];

    addNewTask(taskItem: Task) {
        switch(taskItem.type){
            case TaskType.toDo:
                this.toDo.push(taskItem);
                break;
            case TaskType.inProgress:
                this.inProgress.push(taskItem);
                break;
            case TaskType.done:
                this.done.push(taskItem);
                break;
        }
    }
}