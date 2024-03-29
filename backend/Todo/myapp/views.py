from django.shortcuts import render

# Create your views here.
from rest_framework import status

from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import TodoSerializer
from .models import Todo

class CreateTodoView(APIView):

    @staticmethod
    def post(request):
      
        payload = TodoSerializer(data=request.data)
        if payload.is_valid(raise_exception=True):
            
            Todo.objects.create(**payload.validated_data)
            
            return Response(TodoSerializer(Todo.objects.filter(),many=True).data)
class TodoDetailView(APIView):

    @staticmethod
    def get(request):
           
      
       
            

            
            return Response(TodoSerializer(Todo.objects.filter(),many=True).data)
            

       