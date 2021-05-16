from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

from users.models import Users
from users.serializers import UsersSerializers
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET', 'POST'])
def index(request):
  if request.method == 'GET':
    users = Users.objects.all()

    title = request.GET.get('title', None)
    if title is not None:
      users = users.filter(title__icontains=title)
    
    users_serializer = UsersSerializers(users, many=True)
    return JsonResponse(users_serializer.data, safe=False)