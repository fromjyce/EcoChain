from django.db import models
from django.contrib.auth.models import User

class PackagingItem(models.Model):
    TYPE_CHOICES = [
        ("Box", "Box"),
        ("Crate", "Crate"),
        ("Pallet", "Pallet"),
    ]
    SIZE_CHOICES = [
        ("Small", "Small"),
        ("Medium", "Medium"),
        ("Large", "Large"),
    ]
    STATUS_CHOICES = [
        ("Available", "Available"),
        ("Unavailable", "Unavailable"),
    ]

    type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    size = models.CharField(max_length=20, choices=SIZE_CHOICES)
    location = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
        return f"{self.type} ({self.size}) - {self.location} [{self.status}]"

class ReverseLogisticsRequest(models.Model):
    type = models.CharField(max_length=50)
    reason = models.TextField()
    condition = models.CharField(max_length=50)
    location = models.CharField(max_length=100)
    status = models.CharField(max_length=20, default="Pending")

    def __str__(self):
        return f"{self.type} - {self.status}"

class CollaborativeRequest(models.Model):
    type = models.CharField(max_length=50)
    quantity = models.IntegerField()
    location = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.type} - {self.quantity} at {self.location}"
