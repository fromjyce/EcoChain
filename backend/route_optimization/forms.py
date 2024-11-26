from django import forms
from .models import City

class RouteOptimizationForm(forms.Form):
    source = forms.ModelChoiceField(queryset=City.objects.all(), label="Source City")
    destination = forms.ModelChoiceField(queryset=City.objects.all(), label="Destination City")
    intermediate_stops = forms.ModelMultipleChoiceField(
        queryset=City.objects.all(),
        label="Intermediate Stops",
        required=False,
        widget=forms.CheckboxSelectMultiple
    )
    enable_batching = forms.BooleanField(label="Enable Batching", required=False)
    enable_hyperlocal = forms.BooleanField(label="Enable Hyperlocal Deliveries", required=False)
