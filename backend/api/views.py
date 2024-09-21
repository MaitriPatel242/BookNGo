from rest_framework import generics
from .models import User,UserProfile, Destination, Package, Booking, PackageReview
from .serializers import (
    UserProfileSerializer, DestinationSerializer, PackageSerializer,  BookingSerializer,  PackageReviewSerializer, CreateUserSerializer
)

class UserListCreateView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer


class UserRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = CreateUserSerializer

class UserProfileListCreateView(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class UserProfileRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

# Destination Views
class DestinationListCreateView(generics.ListCreateAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

class DestinationRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer

# Package Views
class PackageListCreateView(generics.ListCreateAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

class PackageRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Package.objects.all()
    serializer_class = PackageSerializer

# Booking Views
class BookingListCreateView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

class BookingRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

# Package Review Views
class PackageReviewListCreateView(generics.ListCreateAPIView):
    queryset = PackageReview.objects.all()
    serializer_class = PackageReviewSerializer

class PackageReviewRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PackageReview.objects.all()
    serializer_class = PackageReviewSerializer














from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

@api_view(['POST'])
@permission_classes([IsAuthenticated])  # Require authentication
def contact_form(request):
    email = request.data.get('email')
    subject = request.data.get('subject')
    message = request.data.get('message')

    # Basic validation
    if not email or not subject or not message:
        return Response({'error': 'Please provide a valid email, subject, and message.'}, status=status.HTTP_400_BAD_REQUEST)
        # Send the email (adjust this to your email sending configuration)
        from django.core.mail import send_mail
        from rest_framework.decorators import api_view
        from rest_framework.response import Response
        from rest_framework import status

        @api_view(['POST'])
        def contact_form(request):
            email = request.data.get('email')
            subject = request.data.get('subject')
            message = request.data.get('message')

            # Here, you might save the message to your database if needed

            # Send a thank-you email
            try:
                send_mail(
                    'Thank you for contacting us',
                    'Thank you for contacting us, we will reach out to you soon.',
                    'boongo@example.com',  # Replace with your sender email
                    [email],  # Recipient email
                    fail_silently=False,
                )
                return Response({"message": "Email sent successfully."}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
