import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { GetListResponseModel } from 'src/app/models/list-models';
import { GetTaskResponseModel, AddTaskRequestModel, EditTaskRequestModel } from 'src/app/models/task-models';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'task-add-edit',
  templateUrl: './task-add-edit.component.html',
  styleUrls: ['./task-add-edit.component.less']
})
export class TaskAddEditComponent {

  @Output() taskAdded: EventEmitter<boolean> = new EventEmitter();
  @Output() cancelAction: EventEmitter<boolean> = new EventEmitter();
  @Input() taskModel: GetTaskResponseModel = new GetTaskResponseModel({});
  @Input() listModel: GetListResponseModel | any = {};

  // olderValueTaskModel: GetTaskResponseModel = new GetTaskResponseModel({});
  newValueTaskModel: GetTaskResponseModel = new GetTaskResponseModel({});

  addTaskRequestModel: AddTaskRequestModel = new AddTaskRequestModel(0);
  editTaskRequestModel: EditTaskRequestModel = new EditTaskRequestModel(this.newValueTaskModel);


  editMode = false;


  constructor (private apiService: ApiHttpService) {

  }

  ngOnInit() {
    if (this.taskModel.ListID !== undefined) {
      this.editMode = true;
      console.log("Task model exist")
      this.newValueTaskModel.copy(this.taskModel);
    }
    else {
      this.addTaskRequestModel = new AddTaskRequestModel(this.listModel.Id);
      // this.taskAdded.emit(true);
      this.editMode = false;

    }
  }


  cancelActionButton() {
    this.cancelAction.emit(true);
  }

  addEditSubmitButton() {

    if (this.editMode) {
      

    } else {
      this.addTaskRequestModel.DueDate = this.newValueTaskModel.DueDate;
      this.addTaskRequestModel.Note = this.newValueTaskModel.Note;
      this.addTaskRequestModel.Title = this.newValueTaskModel.Title;


      console.log("add submit ", this.addTaskRequestModel.toJson());
      this.apiService.post('task', this.addTaskRequestModel.toJson()).subscribe(
        okResponse => {
          this.taskAdded.emit(true);
        }
      );
    }

  }
  
}
