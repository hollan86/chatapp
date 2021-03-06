from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'pk',
            'email',
            'username'
        ]
        read_only_fields = ['pk']