from django.shortcuts import render

# Create your views here.

def lobby(request): 
    return render(request, 'testlobby.html' ,)

def room(request, room_name): 
    return render(request, 'testroom.html' ,{'room_name' : room_name})