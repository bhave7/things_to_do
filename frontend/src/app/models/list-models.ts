
export class GetListResponseModel{
    Id: number
    ListName: String
    IsDeleted: Boolean
    CreatedOn: String
    LastUpdate: String

    constructor (jsonValue: any) {
        this.Id = jsonValue.id;
        this.ListName = jsonValue.list_name;
        this.IsDeleted = jsonValue.is_deleted;
        this.CreatedOn = jsonValue.created_on;
        this.LastUpdate = jsonValue.last_update;
    }

    public getListName() {
        return this.ListName;
    }
}

export class AddListRequestModel {
    ListName: any = "";

    public setListName(listName: String) {
        this.ListName = listName
    }

    public toJson() {
        return {
            list_name: this.ListName,
            user_name: "UserName #1"
        };
    }
}

export class EditListRequestModel {
    ListName: string = "";
    ListId: number = 0;

    public setListName(listName: string) {
        this.ListName = listName
    }
    public setListId(listId: number) {
        this.ListId = listId;
    }

    public toJson() {
        return {
            list_name: this.ListName
        };
    }
}