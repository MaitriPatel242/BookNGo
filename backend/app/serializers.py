from rest_framework import serializers
from .models import User,Destination,Package,Transport,Accomodation,Booking,Payment,PackageReview


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id', 'name', 'user_email', 'contact_num', 'user_type', 'created_at', 'updated_at', 'city']

class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = ['dest_id', 'name', 'country', 'image', 'city', 'created_at', 'updated_at']

class PackageSerializer(serializers.ModelSerializer):
    dest_id = DestinationSerializer()  # Use nested serializer

    class Meta:
        model = Package
        fields = ['package_id', 'dest_id', 'rating', 'image', 'price', 'name', 'duration', 'description', 'created_at', 'updated_at']

class TransportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transport
        fields = ['trans_id', 'type', 'company_name', 'price', 'created_at', 'updated_at']

class AccomodationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Accomodation
        fields = ['acc_id', 'des_id', 'name', 'room_type', 'price', 'image', 'created_at', 'updated_at']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['booking_id', 'user_id', 'total_people', 'pack_id', 'tras_id', 'acc_id', 'start_date', 'total_price', 'created_at', 'updated_at']

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ['pay_id', 'booking', 'date', 'amount', 'type']


class PackageReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageReview
        fields = ['id', 'pack_id', 'user_id', 'review', 'rating']