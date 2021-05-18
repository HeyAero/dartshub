from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import CustomUserCreate, UserView

urlpatterns = [
  path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
  path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
  path('create/', CustomUserCreate.as_view(), name="create_user"),
  path('', UserView.as_view(), name="user_check"),
]