import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ResponseToModelService } from 'src/app/mapper/response-to-model.service';
import { GetListResponseModel } from 'src/app/models/list-models';
import { ApiHttpService } from 'src/app/services/api-http.service';

@Component({
  selector: 'list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.less']
})
export class ListViewComponent {

  @Output() listSelectionEvent: EventEmitter<GetListResponseModel> = new EventEmitter();
  @Output() addEditListEvent: EventEmitter<boolean> = new EventEmitter();

  @Input() refreshList: boolean = false;

  allList: GetListResponseModel[] = [];
  isLoaded = false;


  constructor(private apiService: ApiHttpService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['refreshList'].currentValue) {
      this.getLists();
    }
  }

  ngOnInit() {

    this.getLists();

  }

  getLists() {
    this.apiService.get('list').subscribe(
      (response: any) => {
        const allList = ResponseToModelService.generateFromList(response, GetListResponseModel);

        this.allList = [];
        allList.forEach((list: GetListResponseModel) => {
          if (!list.IsDeleted) {
            this.allList.push(list);
          }
        })

      }
    );
  }

  public addEditList(listModel: any = null) {
    this.addEditListEvent.emit(listModel);
  }

  public deleteList(listId: number) {
    this.apiService.delete('list', listId).subscribe(
      okResponse => {
        this.getLists();
      }
    );

  }

  public listSelected(listModel: GetListResponseModel) {
    this.listSelectionEvent.emit(listModel);
  }

}
