from django.db import models
from users.models import Users

# Create your models here.
class Stats(models.Model):
  user = models.ForeignKey(Users, on_delete=models.SET_NULL, null=True)
  total_games = models.IntegerField()
  three_dart_avg = models.DecimalField(max_digits=5, decimal_places=2)
  one_dart_avg = models.DecimalField(max_digits=4, decimal_places=2)
  wins = models.IntegerField()
  loses = models.IntegerField()
  total_games = models.IntegerField()
  highest_finish = models.IntegerField()
  doubles_hit = models.IntegerField()
  hit_180 = models.IntegerField()
  hit_160_179 = models.IntegerField()
  hit_140_159 = models.IntegerField()
  hit_120_139 = models.IntegerField()
  hit_100_119 = models.IntegerField()
  hit_80_99 = models.IntegerField()
  hit_60_79 = models.IntegerField()
  hit_0_59 = models.IntegerField()

  def __str__(self):
    return f'{self.user.username} - Stats'