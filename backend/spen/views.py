from django.shortcuts import render, redirect
from .models import PackagingItem, ReverseLogisticsRequest, CollaborativeRequest
from .forms import ReverseLogisticsForm, CollaborativeRequestForm

def spen_view(request):
    packaging_items = PackagingItem.objects.all()
    reverse_requests = ReverseLogisticsRequest.objects.all()
    collaborative_requests = CollaborativeRequest.objects.all()

    filters = {
        "type": request.GET.get("type", ""),
        "size": request.GET.get("size", ""),
        "location": request.GET.get("location", ""),
    }

    filtered_items = packaging_items
    for key, value in filters.items():
        if value:
            filtered_items = filtered_items.filter(**{key: value})

    if request.method == "POST":
        if "reverse" in request.POST:
            reverse_form = ReverseLogisticsForm(request.POST)
            if reverse_form.is_valid():
                reverse_form.save()
                return redirect("spen:spen_home")
        elif "collaborative" in request.POST:
            collaborative_form = CollaborativeRequestForm(request.POST)
            if collaborative_form.is_valid():
                collaborative_form.save()
                return redirect("spen:spen_home")
    else:
        reverse_form = ReverseLogisticsForm()
        collaborative_form = CollaborativeRequestForm()

    context = {
        "packaging_items": filtered_items,
        "reverse_form": reverse_form,
        "collaborative_form": collaborative_form,
        "reverse_requests": reverse_requests,
        "collaborative_requests": collaborative_requests,
    }
    return render(request, "spen/spen_home.html", context)
