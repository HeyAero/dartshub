from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

from django.contrib.auth.models import User
from users.serializers import UsersSerializers
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


# Create your views here.
@api_view(['GET', 'POST'])
def index(request):
  if request.method == 'GET':
    users = User.objects.all()
    users_serializer = UsersSerializers(users, many=True)
    return JsonResponse(users_serializer.data, safe=False)
  elif request.method == 'POST':
    users_data = JSONParser().parse(request)
    users_serializer = UsersSerializers(data=users_data)
    if users_serializer.is_valid():
      users_serializer.save()
      return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED)
    return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_tokens(request):
  if request.method == 'GET':
    tokens = Token.objects.all()
    print(tokens)