from django.urls import path
from . import views

app_name = "couriers"

urlpatterns = [
    path('', views.low_emission_couriers_view, name="low_emission_couriers"),
]
