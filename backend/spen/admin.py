from django.contrib import admin
from .models import PackagingItem, ReverseLogisticsRequest, CollaborativeRequest

admin.site.register(PackagingItem)
admin.site.register(ReverseLogisticsRequest)
admin.site.register(CollaborativeRequest)
