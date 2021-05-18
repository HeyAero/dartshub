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
    def put(self, request):
      user = request.user
      if user:
        stats = Stats.objects.get(user=user)
        old_data = StatsSerializers(stats)
        old_data = old_data.data
        if old_data:
          old_total = old_data['total_games']
          tda = ((float(old_data['three_dart_avg']) * old_total) + (float(request.data['three_dart_avg']))) / (old_data['total_games'] + 1)
          oda = ((float(old_data['one_dart_avg']) * old_total) + (float(request.data['one_dart_avg']))) / (old_data['total_games'] + 1)

          old_data['total_games'] = old_data['total_games'] + 1
          old_data['three_dart_avg'] = tda
          old_data['one_dart_avg'] = oda
          old_data['wins'] = old_data['wins'] + request.data['wins']
          old_data['loses'] = old_data['loses'] + request.data['loses']
          if old_data['highest_finish'] < request.data['highest_finish']:
            old_data['highest_finish'] = request.data['highest_finish']
          old_data['doubles_hit'] = old_data['doubles_hit'] + request.data['doubles_hit']
          old_data['hit_180'] = old_data['hit_180'] + request.data['hit_180']
          old_data['hit_160_179'] = old_data['hit_160_179'] + request.data['hit_160_179']
          old_data['hit_140_159'] = old_data['hit_140_159'] + request.data['hit_140_159']
          old_data['hit_120_139'] = old_data['hit_120_139'] + request.data['hit_120_139']
          old_data['hit_100_119'] = old_data['hit_100_119'] + request.data['hit_100_119']
          old_data['hit_80_99'] = old_data['hit_80_99'] + request.data['hit_80_99']
          old_data['hit_60_79'] = old_data['hit_60_79'] + request.data['hit_60_79']
          old_data['hit_0_59'] = old_data['hit_0_59'] + request.data['hit_0_59']

          serializer = StatsSerializers(stats, data=old_data)
          if serializer.is_valid():
            serializer.save()
