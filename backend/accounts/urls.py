from django.urls import path
from . import views

app_name = "accounts"

urlpatterns = [
    path('accounts/', views.profile_view, name='accounts'),
]
