from django import forms
from .models import BusinessProfile, UserProfile

class BusinessProfileForm(forms.ModelForm):
    class Meta:
        model = BusinessProfile
        fields = ['name', 'address', 'city', 'state', 'country', 'website', 'phone', 'photo']

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['name', 'email', 'password']
