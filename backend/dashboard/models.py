from django.db import models
from django.contrib.auth.models import User

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="activities")
    action = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username}: {self.action} ({self.timestamp})"

class GreenScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="green_scores")
    date = models.DateField()
    score = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} - {self.date}: {self.score}"

class EcoPoints(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="eco_points")
    current_points = models.IntegerField(default=0)
    next_target = models.IntegerField(default=2000)

    def __str__(self):
        return f"{self.user.username}: {self.current_points}/{self.next_target}"
