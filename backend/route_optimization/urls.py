from django.urls import path
from . import views

app_name = "route_optimization"

urlpatterns = [
    path("", views.route_optimization_view, name="optimize"),
]
