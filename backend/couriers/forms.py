from django import forms

class CourierFilterForm(forms.Form):
    EMISSION_CHOICES = [
        ("", "Select Emissions"),
        ("Low", "Low"),
        ("Moderate", "Moderate"),
        ("High", "High"),
    ]
    DELIVERY_TIME_CHOICES = [
        ("", "Select Delivery Time"),
        ("Same Day", "Same Day"),
        ("1-2 days", "1-2 days"),
        ("2-3 days", "2-3 days"),
        ("3-5 days", "3-5 days"),
    ]
    
    emissions = forms.ChoiceField(choices=EMISSION_CHOICES, required=False)
    delivery_time = forms.ChoiceField(choices=DELIVERY_TIME_CHOICES, required=False)
    max_cost = forms.IntegerField(required=False, label="Max Cost")
    
class EcoDeliveryChoiceForm(forms.Form):
    DELIVERY_CHOICES = [
        ("sameDay", "Same Day Delivery"),
        ("delayed", "Delayed Delivery (Earn EcoPoints)"),
    ]
    delivery_choice = forms.ChoiceField(choices=DELIVERY_CHOICES, required=True)
