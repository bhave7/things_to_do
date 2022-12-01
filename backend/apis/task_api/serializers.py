from abc import ABC
import datetime

from rest_framework import serializers

from common.models import TaskModel


class TaskModelAddSerializer(serializers.Serializer):
    list_id = serializers.IntegerField(label="List ID")
    title = serializers.CharField(max_length=100, label="Title")
    due_date = serializers.DateTimeField(label="Due Date")
    note = serializers.CharField(max_length=1000, label="Note")


class TaskModelDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskModel
        fields = '__all__'
