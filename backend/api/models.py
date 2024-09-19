from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Permission, Group
from django.utils.translation import gettext_lazy as _
from django.conf import settings
from .managers import CustomUserManager
    
class User(AbstractBaseUser, PermissionsMixin): 
    first_name = models.CharField(_("First Name"), max_length=255)
    last_name = models.CharField(_("Last Name"), max_length=255)
    email = models.EmailField(_("Email Address"),max_length=255 , unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]
    
    objects = CustomUserManager()
    
    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
        
    def __str__(self):
        return self.email
    
    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
class UserProfile(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]
    
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    user_id=models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    gender=models.CharField(max_length=10, choices=GENDER_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    city = models.CharField(max_length=100)
    is_active=models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("User Profile")
        verbose_name_plural = _("User Profiles")
    
    def __str__(self):
        return self.first_name + " "+ self.last_name

class Destination(models.Model):
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    image = models.ImageField(upload_to='media/destination_images/', blank=True, null=True)
    city = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Destination")
        verbose_name_plural = _("Destinations")

    def __str__(self):
        return self.name

class Package(models.Model):
    destination_id = models.ForeignKey(Destination, on_delete=models.CASCADE) 
    rating = models.FloatField()
    image = models.ImageField(upload_to='media/package_images/', blank=True, null=True)
    price = models.FloatField()
    name = models.CharField(max_length=50)
    duration = models.IntegerField() 
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Package")
        verbose_name_plural = _("Packages")

    def __str__(self):
        return self.name


class Transport(models.Model):
    type = models.CharField(max_length=50)
    company_name = models.CharField(max_length=50)
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Transport")
        verbose_name_plural = _("Transports")

    def __str__(self):
        return f"{self.type} by {self.company_name}"

class Accomodation(models.Model):
    destination_id = models.ForeignKey(Destination, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    room_type = models.CharField(max_length=50)
    price = models.FloatField()
    image = models.ImageField(upload_to='media/accommodation_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    
    class Meta:
        verbose_name = _("Accomodation")
        verbose_name_plural = _("Accomodations")

    def __str__(self):
        return self.name

class Booking(models.Model):
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    total_people = models.IntegerField()
    package_id = models.ForeignKey(Package, on_delete=models.CASCADE)
    trasport_id = models.ForeignKey(Transport, on_delete=models.CASCADE)
    accomodation_id = models.ForeignKey(Accomodation, on_delete=models.CASCADE)
    start_date = models.DateField()
    total_price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Booking")
        verbose_name_plural = _("Bookings")

    def __str__(self):
        return f"Booking {self.id} for {self.user_id}"

class Payment(models.Model):
    booking_id = models.ForeignKey(Booking, on_delete=models.CASCADE) 
    date = models.DateField()
    amount = models.IntegerField()
    type = models.CharField(max_length=20) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("Payment")
        verbose_name_plural = _("Payments")

    def __str__(self):
        return f"Payment {self.payment_id} for Booking {self.booking_id}"
    

class PackageReview(models.Model):
    package_id = models.ForeignKey(Package, on_delete=models.CASCADE)
    user_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    review = models.TextField()
    rating = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("PackageReview")
        verbose_name_plural = _("PackageReviews")

    def __str__(self):
        return f"Review {self.id} for Package {self.pack_id} by User {self.user_id}"