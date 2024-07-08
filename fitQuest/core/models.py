from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.CharField()

    def __str__(self):
        return self.user_id


class Quests(models.Model):
    quest_id = models.AutoField(primary_key=True)
    target_area = models.CharField(max_length=50)
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    available = models.BooleanField()
    password = models.CharField(max_length=100)
    quest_points = models.IntegerField()

    def __str__(self):
        return self.quest_id

class User_Quest(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    quest_id = models.ForeignKey(Quests, on_delete=models.CASCADE)
    completion_date = models.CharField(max_length=50)
    status = models.IntegerField()
    
    class Meta:
        unique_together = (('user_id', 'quest_id'),)


