from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone

class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    user_email = models.EmailField(unique=True)
    contact_num = models.CharField(max_length=10)
    user_type = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    city = models.CharField(max_length=100)  # You can set max_length

    def __str__(self):
        return self.name

class Destination(models.Model):
    dest_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    image = models.ImageField(upload_to='destination_images/', blank=True, null=True)
    city = models.CharField(max_length=50)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Package(models.Model):
    package_id = models.AutoField(primary_key=True)
    dest_id = models.ForeignKey(Destination, on_delete=models.CASCADE)  # ForeignKey to Destination model
    rating = models.IntegerField()
    image = models.ImageField(upload_to='package_images/', blank=True, null=True)  # Optional image field
    price = models.IntegerField()
    name = models.CharField(max_length=50)
    duration = models.IntegerField()  # Duration in days or other unit
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Transport(models.Model):
    trans_id = models.AutoField(primary_key=True)
    type = models.CharField(max_length=50)  # E.g., bus, train, flight
    company_name = models.CharField(max_length=50)
    price = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.type} by {self.company_name}"

class Accomodation(models.Model):
    acc_id = models.AutoField(primary_key=True)
    des_id = models.ForeignKey(Destination, on_delete=models.CASCADE)  # ForeignKey to Destination model
    name = models.CharField(max_length=50)
    room_type = models.CharField(max_length=50)  # E.g., single, double, suite
    price = models.IntegerField()
    image = models.ImageField(upload_to='accommodation_images/', blank=True, null=True)  # Optional image field
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Booking(models.Model):
    booking_id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    total_people = models.IntegerField()
    pack_id = models.ForeignKey(Package, on_delete=models.CASCADE)
    tras_id = models.ForeignKey(Transport, on_delete=models.CASCADE)
    acc_id = models.ForeignKey(Accomodation, on_delete=models.CASCADE)
    start_date = models.DateTimeField()
    total_price = models.IntegerField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Booking {self.booking_id} for {self.user_id}"

class Payment(models.Model):
    pay_id = models.AutoField(primary_key=True)
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE)  # Link payment to booking
    date = models.DateField()
    amount = models.IntegerField()
    type = models.CharField(max_length=20)  # E.g., 'Credit Card', 'Cash', 'PayPal', etc.

    def __str__(self):
        return f"Payment {self.pay_id} for Booking {self.booking}"
    

class PackageReview(models.Model):  # Inheriting from models.Model instead of models.Manager
    id = models.AutoField(primary_key=True)
    pack_id = models.ForeignKey(Package, on_delete=models.CASCADE)  # ForeignKey to Package
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)  # ForeignKey to User
    review = models.TextField()
    rating = models.IntegerField()  # Ensure you validate the range (1-5 or any other scale)

    def __str__(self):
        return f"Review {self.id} for Package {self.pack_id} by User {self.user_id}"