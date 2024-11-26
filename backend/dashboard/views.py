from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Activity, GreenScore, EcoPoints
from datetime import date, timedelta

@login_required
def dashboard_view(request):
    user = request.user
    activities = Activity.objects.filter(user=user).order_by("-timestamp")[:10]
    eco_points = EcoPoints.objects.get(user=user)
    
    today = date.today()
    previous_day = today - timedelta(days=1)
    next_day = today + timedelta(days=1)

    green_scores = {
        "today": GreenScore.objects.filter(user=user, date=today).first(),
        "previous": GreenScore.objects.filter(user=user, date=previous_day).first(),
        "next": GreenScore.objects.filter(user=user, date=next_day).first(),
    }

    context = {
        "activities": activities,
        "eco_points": eco_points,
        "green_scores": green_scores,
    }
    return render(request, "dashboard/dashboard.html", context)
