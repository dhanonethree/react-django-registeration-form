from django.urls import path
from .views import MyModelListCreateView, MyModelRetrieveUpdateDestroyView

urlpatterns = [
    path('mymodels/', MyModelListCreateView.as_view(), name='mymodel_list'),
    path('mymodels/<int:pk>/', MyModelRetrieveUpdateDestroyView.as_view(), name='mymodel_detail'),
]