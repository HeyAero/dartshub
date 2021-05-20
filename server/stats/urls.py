from django.urls import path
from .views import StatsFetch

urlpatterns = [
  path('user/', StatsFetch.as_view(), name='stats-user'),
  # path('<int:id>', views.individual_stats, name="stats-id")
]