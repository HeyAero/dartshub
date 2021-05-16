from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize

# Create your views here.
def return_all_users(request):
  return False