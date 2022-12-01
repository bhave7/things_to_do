from common.models import ListModel


class ListService:

    def get_all_lists(self):
        return ListModel.objects.all()

    def get_list_by_id(self, list_id: int):
        return ListModel.objects.get(id=list_id)

    def add_list(self, add_payload):
        ListModel.objects.create(**add_payload)

    def delete_list(self, list_id):
        list_model: ListModel = ListModel.objects.get(id=list_id)
        list_model.is_deleted = True
        list_model.save()
        print(list_model)

    def edit_list(self, list_id, edit_payload):
        list_model: ListModel = ListModel.objects.get(id=list_id)
        list_model.list_name = edit_payload['list_name']
        list_model.save()
        print(list_model)
