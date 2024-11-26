from django.db import models
from django.contrib.auth.models import User

class City(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class RouteOptimization(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    source = models.ForeignKey(City, on_delete=models.CASCADE, related_name="source_routes")
    destination = models.ForeignKey(City, on_delete=models.CASCADE, related_name="destination_routes")
    intermediate_stops = models.TextField()  # Comma-separated list of city names
    distance = models.IntegerField()  # In km
    time = models.IntegerField()  # In minutes
    emissions = models.DecimalField(max_digits=10, decimal_places=2)  # In kg CO2
    optimized_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.source} → {self.destination} ({self.user.username})"
