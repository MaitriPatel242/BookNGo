from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib import admin
from .models import User
from .models import Destination,UserProfile, Package, Transport, Accomodation, Booking, Payment, PackageReview

class UserAdmin(BaseUserAdmin): 
    ordering = ["email"]
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ["email", "first_name", "last_name", "is_staff", "is_active"]
    list_display_links = ["email"]
    list_filter = ["email", "first_name", "last_name", "is_staff", "is_active"]
    search_fields = ["email", "first_name", "last_name"]
    fieldsets = (
        (
            _("Login Credentials"), {
                "fields": ("email", "password",)
            }, 
        ),
        (
            _("Personal Information"),
            {
                "fields": ('first_name', 'last_name',)
            },
        ),
        (
            _("Permissions and Groups"),
            {
                "fields": ("is_active", "is_staff", "is_superuser", "groups", "user_permissions")
            },
        ),
        (
            _("Important Dates"),
            {
                "fields": ("last_login",)
            },
        ),
    )
    add_fieldsets = (
            (None, {
                "classes": ("wide",),
                "fields": ("email", "first_name", "last_name", "password1", "password2", "is_staff", "is_active"),
            },),
        )
readonly_fields = ["last_login"]
admin.site.register(User, UserAdmin)


# UserProfile Admin
@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ["user_id", "first_name", "last_name", "gender", "city", "is_active"]
    list_filter = ["gender", "city", "is_active"]
    search_fields = ["first_name", "last_name", "city"]

# Destination Admin
@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ["name", "country", "city", "is_active"]
    list_filter = ["country", "city", "is_active"]
    search_fields = ["name", "country", "city"]

# Package Admin
@admin.register(Package)
class PackageAdmin(admin.ModelAdmin):
    list_display = ["name", "destination_id", "price", "rating", "duration", "is_active"]
    list_filter = ["destination_id", "rating", "price", "is_active"]
    search_fields = ["name", "destination_id__name"]

# Transport Admin
@admin.register(Transport)
class TransportAdmin(admin.ModelAdmin):
    list_display = ["type", "company_name", "price", "is_active"]
    list_filter = ["type", "company_name", "is_active"]
    search_fields = ["type", "company_name"]

# Accommodation Admin
@admin.register(Accomodation)
class AccomodationAdmin(admin.ModelAdmin):
    list_display = ["name", "destination_id", "room_type", "price", "is_active"]
    list_filter = ["destination_id", "room_type", "is_active"]
    search_fields = ["name", "room_type", "destination_id__name"]

# Booking Admin
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ["user_id", "package_id", "trasport_id", "accomodation_id", "total_people", "start_date", "total_price", "is_active"]
    list_filter = ["start_date", "package_id", "user_id", "is_active"]
    search_fields = ["user_id__email", "package_id__name"]

# Payment Admin
@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ["booking_id", "date", "amount", "type", "is_active"]
    list_filter = ["date", "type", "is_active"]
    search_fields = ["booking_id__id", "type"]

# PackageReview Admin
@admin.register(PackageReview)
class PackageReviewAdmin(admin.ModelAdmin):
    list_display = ["package_id", "user_id", "rating", "is_active"]
    list_filter = ["rating", "is_active"]
    search_fields = ["user_id__email", "package_id__name"]