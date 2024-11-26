from django import forms
from .models import ReverseLogisticsRequest, CollaborativeRequest

class ReverseLogisticsForm(forms.ModelForm):
    class Meta:
        model = ReverseLogisticsRequest
        fields = ["type", "reason", "condition", "location"]

class CollaborativeRequestForm(forms.ModelForm):
    class Meta:
        model = CollaborativeRequest
        fields = ["type", "quantity", "location", "contact"]
