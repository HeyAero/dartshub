from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import Stats
from .serializers import StatsSerializers

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_stats_to_user(sender, instance=None, created=False, **kwargs):
  if created:
    print('Creating user stats')
    new_stats = Stats.objects.create(user=instance)
    new_stats.save()

class StatsFetch(APIView):
    def get(self, request):
        user = request.user
        if user:
          stats = Stats.objects.get(user=user)
          return_data = StatsSerializers(stats)
          return_data = return_data.data
          return Response(return_data, status=status.HTTP_200_OK)
