from rest_framework import serializers 
from .models import Stats

class StatsSerializers(serializers.ModelSerializer):

  class Meta:
    model = Stats
    fields = ('user', 'total_games', 'three_dart_avg', 'one_dart_avg', 'wins', 'loses', 'total_games', 'highest_finish', 'doubles_hit', 'hit_180', 'hit_160_179', 'hit_140_159', 'hit_120_139', 'hit_100_119', 'hit_80_99', 'hit_60_79', 'hit_0_59')