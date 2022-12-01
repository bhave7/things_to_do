from django.db import models

# Create your models here.


class UserModel(models.Model):
    user_name = models.CharField(max_length=100)
    created_on = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)


class ListModel(models.Model):
    user_name = models.CharField(max_length=100)

    list_name = models.CharField(max_length=100)
    is_deleted = models.BooleanField(default=False)

    created_on = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)


class TaskModel(models.Model):
    list_id = models.IntegerField()

    title = models.CharField(max_length=100)
    due_date = models.DateTimeField()
    note = models.CharField(max_length=1000)
    is_complete = models.BooleanField(default=False)
    is_important = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    created_on = models.DateTimeField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)

    