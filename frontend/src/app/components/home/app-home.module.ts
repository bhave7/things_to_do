import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskViewComponent } from '../task/task-view/task-view.component';
import { ListViewComponent } from '../list/list-view/list-view.component';
import { TaskAddEditComponent } from '../task/task-add-edit/task-add-edit.component';
import { ListAddEditComponent } from '../list/list-add-edit/list-add-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskViewComponent,
    ListViewComponent,
    TaskAddEditComponent,
    ListAddEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [    
    TaskViewComponent,
    ListViewComponent,
    TaskAddEditComponent,
    ListAddEditComponent,]
})
export class AppHomeModule { }
