from django.shortcuts import render
from django.http import HttpResponse
from django.core.serializers import serialize

from django.contrib.auth import authenticate, login



# # Create your views here.
# @api_view(['GET', 'POST'])
# def index(request):
#   data = {}
#   if request.method == 'GET':
#     users = User.objects.all()
#     users_serializer = UsersSerializers(users, many=True)
#     return JsonResponse(users_serializer.data, safe=False)
#   elif request.method == 'POST':
#     users_data = JSONParser().parse(request)
#     users_serializer = UsersSerializers(data=users_data)
#     if users_serializer.is_valid():
#       user_data = users_serializer.save()
#       print(users_serializer)
#       data['username'] = user_data.username
#       token = Token.objects.get(user=user_data).key
#       data['token'] = token
#       return JsonResponse(data, status=status.HTTP_201_CREATED)
#     return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET'])
# def get_tokens(request):
#   if request.method == 'GET':
#     print('TEST')
#     tokens = Token.objects.all()
#     print(tokens)

# @api_view(['POST'])
# def login_user(request):
#   data = JSONParser().parse(request)
#   print("DATA START")
#   print(data)
#   print("DATA END")
#   username = data['username']
#   password = data['password']
#   print(username)
#   print(password)
#   user = authenticate(username=username, password=password)
#   print(user)
#   if user is not None:
#       print('AUTH')
#   else:
#       print('NO AUTH')