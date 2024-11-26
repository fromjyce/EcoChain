from django.db import models

class Courier(models.Model):
    EMISSION_CHOICES = [
        ("Low", "Low"),
        ("Moderate", "Moderate"),
        ("High", "High"),
    ]
    DELIVERY_TIME_CHOICES = [
        ("Same Day", "Same Day"),
        ("1-2 days", "1-2 days"),
        ("2-3 days", "2-3 days"),
        ("3-5 days", "3-5 days"),
    ]
    
    name = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    product_type = models.CharField(max_length=100)
    emissions = models.CharField(max_length=20, choices=EMISSION_CHOICES)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_time = models.CharField(max_length=20, choices=DELIVERY_TIME_CHOICES)

    def __str__(self):
        return f"{self.name} ({self.source} to {self.destination})"
