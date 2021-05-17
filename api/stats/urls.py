from django.urls import path
from stats import views
from django.core.serializers import serialize

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

from django.contrib.auth.models import User
from users.serializers import UsersSerializers
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def index(request):
  return False