from django.contrib import admin
from .models import User, Destination, Package, Transport, Accomodation, Booking, Payment, PackageReview

admin.site.register(User)
admin.site.register(Destination)
admin.site.register(Accomodation)
admin.site.register(Transport)
admin.site.register(Package)
admin.site.register(Booking)
admin.site.register(Payment)
admin.site.register(PackageReview)