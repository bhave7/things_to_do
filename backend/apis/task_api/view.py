from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from apis.task_api.serializers import TaskModelAddSerializer, TaskModelDisplaySerializer
from apis.task_api.task_service import TaskService
from common.models import TaskModel


class TaskAPIView(APIView):
    serializer_class = TaskModelAddSerializer

    def get(self, request: Request, task_id=None):

        list_id = request.query_params.get('list_id', None)
        if list_id:
            print("Getting by list id", list_id)
            response_data = self.get_by_list_id(list_id=list_id)
        elif task_id:
            response_data = self.get_by_id(task_id)
        else:
            response_data = self.get_all()

        return Response(response_data)

    def get_all(self):
        list_models = TaskService().get_all_tasks()
        list_model_serializer = TaskModelDisplaySerializer(list_models, many=True)
        return list_model_serializer.data

    def get_by_id(self, task_id):
        list_model = TaskService().get_task_by_id(task_id=task_id)
        list_model_serializer = TaskModelDisplaySerializer(list_model)
        return list_model_serializer.data

    def get_by_list_id(self, list_id):
        list_model = TaskService().get_task_by_list_id(list_id=list_id)
        list_model_serializer = TaskModelDisplaySerializer(list_model, many=True)
        return list_model_serializer.data

    def post(self, request: Request):
        task_model_add_serializer = TaskModelAddSerializer(data=request.data)

        if task_model_add_serializer.is_valid():
            task_model_created_object = TaskModel.objects.create(**task_model_add_serializer.data)

            return Response({"Message": "List Added successfully",
                             "Item": TaskModelDisplaySerializer(task_model_created_object).data})

    def options(self, request: Request, *args, **kwargs):
        print(request.method)
        response = Response({"Test": "success"}, status=status.HTTP_200_OK)
        return response
