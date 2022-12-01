from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from apis.list_api.list_service import ListService
from apis.list_api.serializers import ListModelDisplaySerializer, ListModelAddSerializer, ListModelEditSerializer
from common.models import ListModel
from common.url_encoder_formater import get_data_from_url_encoded_payload


class ListAPIView(APIView):
    serializer_class = ListModelAddSerializer

    def get(self, request: Request, list_id=None):
        if list_id:
            return self.get_by_id(list_id=list_id)
        else:
            return self.get_all()

    def get_by_id(self, list_id: int):
        response_model = ListService().get_list_by_id(list_id)
        item_serialized = ListModelDisplaySerializer(response_model, many=False)
        return Response(item_serialized.data)

    def get_all(self):
        response_model = ListService().get_all_lists()
        item_serialized = ListModelDisplaySerializer(response_model, many=True)
        return Response(item_serialized.data)

    def post(self, request: Request):
        list_model_add_serializer = ListModelAddSerializer(data=request.data)

        if list_model_add_serializer.is_valid():
            list_model_created_object = ListService().add_list(add_payload=list_model_add_serializer.data)

            return Response({"Message": "List Added successfully",
                             "Item": ListModelDisplaySerializer(list_model_created_object).data})

    def delete(self, request, list_id):
        ListService().delete_list(list_id=list_id)
        return Response({"Message": "Deleted Successfully"})

    def put(self, request: Request, list_id):
        data = get_data_from_url_encoded_payload(request.data)
        list_model_edit_serializer = ListModelEditSerializer(data=data)

        if list_model_edit_serializer.is_valid():
            ListService().edit_list(list_id=list_id, edit_payload=list_model_edit_serializer.data)
            return Response({"Message": "Edited Successfully"})

    def options(self, request: Request, *args, **kwargs):
        print(request.method)
        response = Response({"Test": "success"}, status=status.HTTP_200_OK)
        return response
