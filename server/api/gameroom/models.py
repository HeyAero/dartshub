from django.db import models

# Create your models here.
class Room(models.Model):
    rname = models.CharField(max_length=100)
    users = models.IntegerField(default=0)

 
    def __str__(self):
        return self.rname