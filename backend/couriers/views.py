from django.shortcuts import render, redirect
from .models import Courier
from .forms import CourierFilterForm, EcoDeliveryChoiceForm

def low_emission_couriers_view(request):
    filters = {
        'emissions': request.GET.get('emissions', ''),
        'delivery_time': request.GET.get('delivery_time', ''),
        'max_cost': request.GET.get('max_cost', ''),
    }
    
    # Apply filters to couriers data
    couriers = Courier.objects.all()
    
    if filters['emissions']:
        couriers = couriers.filter(emissions=filters['emissions'])
    
    if filters['delivery_time']:
        couriers = couriers.filter(delivery_time=filters['delivery_time'])
    
    if filters['max_cost']:
        couriers = couriers.filter(cost__lte=filters['max_cost'])
    
    selected_couriers = request.session.get('selected_couriers', [])
    
    # Handle Eco Delivery Choice
    eco_delivery_incentive = 0
    if request.method == 'POST':
        if 'eco_delivery_choice' in request.POST:
            form = EcoDeliveryChoiceForm(request.POST)
            if form.is_valid():
                if form.cleaned_data['delivery_choice'] == 'delayed':
                    eco_delivery_incentive = 10  # Incentive for delayed delivery
        else:
            form = CourierFilterForm(request.GET)

        # Update the session with selected couriers
        if 'select_courier' in request.POST:
            courier_id = request.POST.get('courier_id')
            selected_couriers.append(courier_id)
            request.session['selected_couriers'] = selected_couriers

        if 'remove_courier' in request.POST:
            courier_id = request.POST.get('courier_id')
            selected_couriers.remove(courier_id)
            request.session['selected_couriers'] = selected_couriers

    else:
        form = CourierFilterForm(request.GET)

    selected_couriers_details = Courier.objects.filter(id__in=selected_couriers)

    context = {
        'couriers': couriers,
        'form': form,
        'selected_couriers': selected_couriers_details,
        'eco_delivery_incentive': eco_delivery_incentive,
    }

    return render(request, 'couriers/low_emission_couriers.html', context)
