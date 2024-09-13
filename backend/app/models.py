from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    user_name = models.CharField(max_length=50)
    user_email = models.EmailField(unique=True)
    contact_number = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    city = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.user_name

class Destination(models.Model):
    destination_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    image = models.ImageField(upload_to='media/destination_images/', blank=True, null=True)
    city = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Package(models.Model):
    package_id = models.AutoField(primary_key=True)
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

    def __str__(self):
        return self.name


class Transport(models.Model):
    transport_id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=50)
    company_name = models.CharField(max_length=50)
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.type} by {self.company_name}"

class Accomodation(models.Model):
    accomodation_id = models.AutoField(primary_key=True)
    destination_id = models.ForeignKey(Destination, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    room_type = models.CharField(max_length=50)
    price = models.FloatField()
    image = models.ImageField(upload_to='media/accommodation_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class Booking(models.Model):
    booking_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    total_people = models.IntegerField()
    package_id = models.ForeignKey(Package, on_delete=models.CASCADE)
    trasport_id = models.ForeignKey(Transport, on_delete=models.CASCADE)
    accomodation_id = models.ForeignKey(Accomodation, on_delete=models.CASCADE)
    start_date = models.DateField()
    total_price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"Booking {self.booking_id} for {self.user_id}"

class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    booking_id = models.ForeignKey(Booking, on_delete=models.CASCADE) 
    date = models.DateField()
    amount = models.IntegerField()
    type = models.CharField(max_length=20) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"Payment {self.payment_id} for Booking {self.booking_id}"
    

class PackageReview(models.Model):
    package_review_id = models.AutoField(primary_key=True)
    package_id = models.ForeignKey(Package, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.TextField()
    rating = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"Review {self.id} for Package {self.pack_id} by User {self.user_id}"