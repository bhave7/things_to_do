from rest_framework import serializers

from common.models import ListModel


class ListModelDisplaySerializer(serializers.ModelSerializer):
    class Meta:
        model = ListModel
        fields = '__all__'


class ListModelAddSerializer(serializers.Serializer):
    user_name = serializers.CharField(max_length=100, label="User Name")
    list_name = serializers.CharField(max_length=100, label="List Name")


class ListModelEditSerializer(serializers.Serializer):
    list_name = serializers.CharField(max_length=100, label="List Name")
