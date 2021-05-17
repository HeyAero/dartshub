from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.lobby, name ='lobby'),
    path('room/<str:room_name>/', views.room, name ='room'),
]
