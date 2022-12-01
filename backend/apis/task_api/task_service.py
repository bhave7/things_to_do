from typing import List, Optional

from common.models import TaskModel


class TaskService:
    def get_all_tasks(self) -> List[TaskModel]:
        task_models: List[TaskModel] = TaskModel.objects.all()
        return task_models

    def get_task_by_id(self, task_id) -> TaskModel:
        task_model: TaskModel = TaskModel.objects.get(id=task_id)
        return task_model

    def get_task_by_list_id(self, list_id) -> Optional[List[TaskModel]]:
        task_models: Optional[List[TaskModel]] = TaskModel.objects.filter(list_id=list_id).values()
        return task_models
