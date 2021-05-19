from django.db import models
from users.models import CustomUser

# Create your models here.
class Stats(models.Model):
  user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
  total_games = models.IntegerField(default=0)
  three_dart_avg = models.DecimalField(max_digits=5, decimal_places=2, default=0)
  one_dart_avg = models.DecimalField(max_digits=4, decimal_places=2, default=0)
  wins = models.IntegerField(default=0)
  loses = models.IntegerField(default=0)
  total_games = models.IntegerField(default=0)
  highest_finish = models.IntegerField(default=0)
  doubles_hit = models.IntegerField(default=0)
  hit_180 = models.IntegerField(default=0)
  hit_160_179 = models.IntegerField(default=0)
  hit_140_159 = models.IntegerField(default=0)
  hit_120_139 = models.IntegerField(default=0)
  hit_100_119 = models.IntegerField(default=0)
  hit_80_99 = models.IntegerField(default=0)
  hit_60_79 = models.IntegerField(default=0)
  hit_0_59 = models.IntegerField(default=0)

  def __str__(self):
    return f'{self.user.username} - Stats'