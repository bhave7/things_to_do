import { Component, EventEmitter, Input, Optional, Output, SimpleChanges } from '@angular/core';
import { AddListRequestModel, EditListRequestModel } from 'src/app/models/list-models';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'list-add-edit',
  templateUrl: './list-add-edit.component.html',
  styleUrls: ['./list-add-edit.component.less']
})
export class ListAddEditComponent {

  editMode = false;
  listName: string = "";

  addRequestModel: AddListRequestModel = new AddListRequestModel();
  editRequestModel: EditListRequestModel = new EditListRequestModel();

  @Output() listAdded: EventEmitter<Boolean> = new EventEmitter();
  @Output() cancelAction: EventEmitter<any> = new EventEmitter();

  @Input() listModel: any; // GetListResponseModel;

  constructor (private apiService: ApiHttpService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['listModel'].currentValue) {
      this.listName = this.listModel.getListName();
      this.editMode = true;
    }
  }

  ngOnInit() {
   console.log("list: Start in add edit mode")
  }

  addEditSubmitButton() {

    if (this.editMode) {
      console.log("This is edit mode")
      this.editRequestModel.setListName(this.listName);


      this.apiService.put('list', this.listModel.Id, this.editRequestModel.toJson()).subscribe(
        response => {
          this.listAdded.emit(true);
        }
      );
    }

    else {
      console.log("This is add mode")
    this.addRequestModel.setListName(this.listName)
    this.apiService.post('list', this.addRequestModel.toJson()).subscribe(
      response => {
        this.listAdded.emit(true);
      }
    );}
  }

  cancelActionButton() {
    this.cancelAction.emit();
  }
}
