from django.shortcuts import render
from .models import AnalyticsData

def analytics_view(request):
    # Fetch analytics data from the database
    emissions_data = AnalyticsData.objects.all()

    # Prepare the data for the charts
    emission_months = [data.month for data in emissions_data]
    emissions = [data.emissions_saved for data in emissions_data]
    packaging_reuse = [data.packaging_reused for data in emissions_data]
    eco_points_usage = [data.eco_points_used for data in emissions_data]

    # For demonstration, we can add dummy recommendations (these would typically be AI-generated)
    recommendations = {
        "emissions": "Great progress! Consider adopting more renewable energy solutions for logistics.",
        "packaging": "Focus on increasing the recycling of metal and cardboard packaging.",
        "eco_points": "Promote EcoPoints during high-impact quarters like Q4 to increase usage."
    }

    context = {
        'emission_months': emission_months,
        'emissions': emissions,
        'packaging_reuse': packaging_reuse,
        'eco_points_usage': eco_points_usage,
        'recommendations': recommendations
    }

    return render(request, 'analytics/analytics.html', context)
