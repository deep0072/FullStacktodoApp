from django.db import models

# Create your models here.
class Todo(models.Model):
    id = models.CharField(primary_key=True, max_length=200)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)