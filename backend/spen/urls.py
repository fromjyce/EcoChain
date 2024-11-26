from django.urls import path
from . import views

app_name = "spen"

urlpatterns = [
    path("", views.spen_view, name="spen_home"),
]
