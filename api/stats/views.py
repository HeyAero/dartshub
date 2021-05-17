from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize

# Create your views here.
from django.core.serializers import serialize

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status

from .models import Stats
from .serializers import StatsSerializers
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def index(request):
  if request.method == 'GET':
    stats = Stats.objects.all()
    stats_serializer = StatsSerializers(stats, many=True)
    return JsonResponse(stats_serializer.data, safe=False)