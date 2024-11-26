from django.db import models

class AnalyticsData(models.Model):
    month = models.CharField(max_length=20)
    emissions_saved = models.IntegerField()
    packaging_reused = models.IntegerField()
    eco_points_used = models.IntegerField()

    def __str__(self):
        return f"{self.month} Analytics"
