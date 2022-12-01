import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ResponseToModelService } from 'src/app/mapper/response-to-model.service';
import { GetListResponseModel } from 'src/app/models/list-models';
import { GetTaskByListIdRequestModel, GetTaskResponseModel } from 'src/app/models/task-models';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.less']
})
export class TaskViewComponent {

  @Input() listModel: GetListResponseModel | any = null;

  @Output() taskSelectionEvent: EventEmitter<Number> = new EventEmitter();
  @Output() addEditTaskEvent: EventEmitter<boolean> = new EventEmitter();

  @Input() refreshTasks: boolean = false;

  allTasks: GetTaskResponseModel[] = [];
  isLoaded = false;

  constructor(private apiService: ApiHttpService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ListId in task view is: ", this.listModel);
    this.isLoaded = false;
    if (this.listModel && (changes['listModel'].currentValue !== changes['listModel'].previousValue)) {
      this.getTasks();
    }

  }

  ngOnInit() {
    console.log("TASK: Start in add edit mode")
  }

  getTasks() {
    console.log("GetTask triggered for ", this.listModel.Id);

    let getTaskQueryParamModel = new GetTaskByListIdRequestModel(this.listModel.Id);

    this.apiService.get('task', getTaskQueryParamModel.toJson()).subscribe(
      (response: any) => {
        const allTasks = ResponseToModelService.generateFromList(response, GetTaskResponseModel);

        this.allTasks = [];
        allTasks.forEach((task: GetTaskResponseModel) => {
          if (!task.IsDeleted) {
            this.allTasks.push(task);
          }
        }
        )
        this.isLoaded = true;
        this.refreshTasks = false;
      }
    );
  }

  addEditTask(taskModel: any = {}) {
    this.addEditTaskEvent.emit(taskModel);
  }

  deleteTask(taskId: number) {
    this.apiService.delete('list', taskId).subscribe(
      okResponse => {
        this.getTasks();
      }
    );
  }


}
