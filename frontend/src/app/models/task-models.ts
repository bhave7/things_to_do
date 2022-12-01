
export class GetTaskResponseModel{
    Id: number
    ListID: number
    IsComplete: Boolean
    IsImportant: Boolean
    IsDeleted: Boolean
    CreatedOn: String
    LastUpdate: String
    Title: string
    DueDate: string
    Note: string

    constructor (jsonValue: any) {
        this.Id = jsonValue.id
        this.ListID = jsonValue.list_id;
        this.Title = jsonValue.title;
        this.DueDate = jsonValue.due_date;
        this.Note = jsonValue.note;
        this.IsComplete = jsonValue.is_complete;
        this.IsImportant = jsonValue.is_important;
        this.IsDeleted = jsonValue.is_deleted;
        this.CreatedOn = jsonValue.created_on;
        this.LastUpdate = jsonValue.last_update;
    }

    public copy(taskModel: GetTaskResponseModel) {
        this.Id = taskModel.Id;
        this.ListID = taskModel.ListID;
        this.IsComplete = taskModel.IsComplete;
        this.IsImportant = taskModel.IsImportant;
        this.IsDeleted = taskModel.IsDeleted;
        this.CreatedOn = taskModel.CreatedOn;
        this.LastUpdate = taskModel.LastUpdate;
        this.Title = taskModel.Title;
        this.DueDate = taskModel.DueDate;
        this.Note = taskModel.Note;
    }

}


export class GetTaskByListIdRequestModel {
    ListID: Number

    constructor (list_id: Number) {
        this.ListID = list_id
    }
     
    public toJson() {
        return {
            list_id: this.ListID
        }
    }

}

export class AddTaskRequestModel {
    public ListId: number;
    public Title: string;
    public DueDate: string;
    public Note: string;

    constructor (listId: number) {
        this.ListId = listId;
        this.Title = "";
        this.DueDate ="";
        this.Note =""
    }

    public toJson() {
        return {
            list_id: this.ListId,
            title: this.Title,
            due_date: this.DueDate,
            note: this.Note
        }
    }
}

export class EditTaskRequestModel {
    public Id: number;
    public ListID: number;
    public Title: string;
    public DueDate: string;
    public Note: string;

    constructor (taskModel: GetTaskResponseModel) {
        this.Id = taskModel.Id;
        this.ListID = taskModel.ListID;
        this.Title = taskModel.Title;
        this.DueDate = taskModel.DueDate;
        this.Note = taskModel.Note;
    }

    public toJson() {
        return {
            title: this.Title,
            due_date: this.DueDate,
            note: this.Note
        }
    }
}