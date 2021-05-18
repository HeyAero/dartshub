from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
  dummy_data = models.CharField(blank=True, max_length=120)
