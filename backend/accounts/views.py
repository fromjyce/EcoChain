from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import BusinessProfile, UserProfile
from .forms import BusinessProfileForm, UserProfileForm

@login_required
def profile_view(request):
    user_profile = request.user.user_profile
    business_profile = request.user.business_profile

    if request.method == 'POST':
        # Handle business profile form submission
        business_form = BusinessProfileForm(request.POST, request.FILES, instance=business_profile)
        user_form = UserProfileForm(request.POST, instance=user_profile)

        if business_form.is_valid() and user_form.is_valid():
            business_form.save()
            user_form.save()
            return redirect('profile')  # Redirect to the same page after saving

    else:
        business_form = BusinessProfileForm(instance=business_profile)
        user_form = UserProfileForm(instance=user_profile)

    context = {
        'business_form': business_form,
        'user_form': user_form,
        'business_profile': business_profile,
        'user_profile': user_profile,
    }
    return render(request, 'profile/profile.html', context)
