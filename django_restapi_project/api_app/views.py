from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import UserRegistration as MyModel
from .serializers import MyModelSerializer

class MyModelListCreateView(generics.ListCreateAPIView):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class MyModelRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer
# class MyModelRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = MyModel.objects.all()
#     serializer_class = MyModelSerializer
#   queryset = MyModel.objects.all()
#     serializer_class = MyModelSerializer  queryset = MyModel.objects.all()
#     serializer_class = MyModelSerializer