from django.contrib import admin
from .models import User, Destination, Package, Transport, Accomodation, Booking, Payment, PackageReview

class UserAdmin(admin.ModelAdmin):
    list_display = ('user_id', 'name', 'user_email', 'contact_num', 'user_type', 'created_at', 'updated_at')

class DestinationAdmin(admin.ModelAdmin):
    list_display = ('dest_id', 'name', 'country', 'city', 'created_at', 'updated_at')  # Use 'des_id' instead of 'id'

class PackageAdmin(admin.ModelAdmin):
    list_display = ('package_id', 'dest_id', 'rating', 'price', 'name', 'duration', 'description', 'created_at', 'updated_at')

class TransportAdmin(admin.ModelAdmin):
    list_display = ('trans_id', 'type', 'company_name', 'price', 'created_at', 'updated_at')

class AccomodationAdmin(admin.ModelAdmin):
    list_display = ('acc_id', 'des_id', 'name', 'room_type', 'price', 'created_at', 'updated_at')

class BookingAdmin(admin.ModelAdmin):
    list_display = ('booking_id', 'user_id', 'total_people', 'pack_id', 'tras_id', 'acc_id', 'start_date', 'total_price', 'created_at', 'updated_at')

class PaymentAdmin(admin.ModelAdmin):
    list_display = ('pay_id', 'booking', 'date', 'amount', 'type')

class PackageReviewAdmin(admin.ModelAdmin):
    list_display = ('id', 'pack_id', 'user_id', 'review', 'rating')

# Registering models with custom admin classes
admin.site.register(User, UserAdmin)
admin.site.register(Destination, DestinationAdmin)
admin.site.register(Package, PackageAdmin)
admin.site.register(Transport, TransportAdmin)
admin.site.register(Accomodation, AccomodationAdmin)
admin.site.register(Booking, BookingAdmin)
admin.site.register(Payment, PaymentAdmin)
admin.site.register(PackageReview, PackageReviewAdmin)
