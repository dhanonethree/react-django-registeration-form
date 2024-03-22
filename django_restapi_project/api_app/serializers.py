from rest_framework import serializers
from .models import UserRegistration as MyModel

class MyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyModel
        fields = '__all__'  # Or, specify the fields you want to include in the serializer