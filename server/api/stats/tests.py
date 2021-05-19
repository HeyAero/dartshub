from django.test import TestCase
from .models import Stats
from users.models import CustomUser
from .serializers import StatsSerializers
# Create your tests here.

class StatsTestCase(TestCase):
  def setUp(self):
    CustomUser.objects.create(username="test", password="test", email="test@test.com")

  def test_creation_works(self):
    fake_user = CustomUser.objects.get(username="test")
    stats = Stats.objects.get(user=fake_user)
    new_stats = StatsSerializers(stats)
    print(stats)
    self.assertEqual(new_stats.data['total_games'], 0)