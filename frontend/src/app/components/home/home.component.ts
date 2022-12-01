import { Component } from '@angular/core';
import { GetListResponseModel } from 'src/app/models/list-models';
// import { AppHomeModule } from './app-home.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  // TASK VARIABLES
  selectedTaskId: number = 0;
  taskAddEdit: boolean = false;
  refreshTask: boolean = false;
  taskModelForEdit: any; //

  // LIST VARIABLES
  selectedList: GetListResponseModel | any = null;
  listAddEdit: boolean = false;
  refreshList: boolean = false;
  listModelForEdit: any; // GetListResponseModel;
  

  closeActionPane(event: any) {
    this.taskAddEdit = false;
    this.listAddEdit = false;
  }

  // ACTION RELATED TO THE task ON THE HOME PAGE
  listSelectionEventObserver(listModel: GetListResponseModel) {
    this.selectedList = listModel;
  }

  listAddedEditedEventObserver(listAddedEdited: any) {
    this.refreshList = true;
    this.listAddEdit = false;
  }

  addEditListEventObserver(listModel: any = null) {
    this.listAddEdit = true;
    this.taskAddEdit = false;
    this.listModelForEdit = listModel;
  }


  // ACTION RELATED TO THE list ON THE HOME PAGE
  taskSelectionEventObserver(selectedTaskId: any) {
    this.selectedTaskId = selectedTaskId;
  }

  taskAddedEditedEventObserver(taskAddedEdited: any) {
    this.refreshList = true;
    this.taskAddEdit = false;
  }

  addEditTaskEventObserver(taskModel: any = {}) {
    this.taskAddEdit = true;
    this.listAddEdit = false;
    this.taskModelForEdit = taskModel;
  }

}
