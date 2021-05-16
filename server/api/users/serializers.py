from rest_framework import serializers 
from users.models import Users
from django.contrib.auth.models import User

class UsersSerializers(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = ('username', 'email', 'password')