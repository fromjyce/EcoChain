from django.shortcuts import render, redirect
from .models import City, RouteOptimization
from .forms import RouteOptimizationForm
from django.contrib.auth.decorators import login_required
import random

@login_required
def route_optimization_view(request):
    if request.method == "POST":
        form = RouteOptimizationForm(request.POST)
        if form.is_valid():
            source = form.cleaned_data["source"]
            destination = form.cleaned_data["destination"]
            intermediate_stops = form.cleaned_data["intermediate_stops"]
            enable_batching = form.cleaned_data["enable_batching"]
            enable_hyperlocal = form.cleaned_data["enable_hyperlocal"]

            # Simplified logic for random route optimization
            total_stops = [source.name] + [stop.name for stop in intermediate_stops] + [destination.name]
            if enable_batching:
                total_stops = total_stops[::2]  # Example batching logic
            if enable_hyperlocal:
                total_stops = [stop for stop in total_stops if "local" in stop.lower()]  # Example hyperlocal logic

            distance = random.choice([50, 100, 200, 300, 400, 500])
            time = random.choice([30, 60, 120, 150, 200])
            emissions = round(random.uniform(5, 25), 2)

            # Save the optimized route
            RouteOptimization.objects.create(
                user=request.user,
                source=source,
                destination=destination,
                intermediate_stops=",".join(total_stops),
                distance=distance,
                time=time,
                emissions=emissions,
            )

            context = {
                "form": form,
                "route_details": {
                    "stops": total_stops,
                    "distance": distance,
                    "time": time,
                    "emissions": emissions,
                },
            }
            return render(request, "route_optimization/route_optimization.html", context)
    else:
        form = RouteOptimizationForm()

    return render(request, "route_optimization/route_optimization.html", {"form": form})
