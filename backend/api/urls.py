from django.urls import path
from .views import (
    UserListCreateView, UserProfileListCreateView, UserProfileRetrieveUpdateDestroyView, UserRetrieveUpdateDestroyView,
    DestinationListCreateView, DestinationRetrieveUpdateDestroyView,
    PackageListCreateView, PackageRetrieveUpdateDestroyView,
    TransportListCreateView, TransportRetrieveUpdateDestroyView,
    AccomodationListCreateView, AccomodationRetrieveUpdateDestroyView,
    BookingListCreateView, BookingRetrieveUpdateDestroyView,
    PaymentListCreateView, PaymentRetrieveUpdateDestroyView,
    PackageReviewListCreateView, PackageReviewRetrieveUpdateDestroyView
)

urlpatterns = [
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserRetrieveUpdateDestroyView.as_view(), name='user-detail'),

    path('userprofiles/', UserProfileListCreateView.as_view(), name='userprofile-list-create'),
    path('userprofiles/<int:pk>/', UserProfileRetrieveUpdateDestroyView.as_view(), name='userprofile-detail'),

    path('destinations/', DestinationListCreateView.as_view(), name='destination-list-create'),
    path('destinations/<int:pk>/', DestinationRetrieveUpdateDestroyView.as_view(), name='destination-detail'),

    path('packages/', PackageListCreateView.as_view(), name='package-list-create'),
    path('packages/<int:pk>/', PackageRetrieveUpdateDestroyView.as_view(), name='package-detail'),

    path('transports/', TransportListCreateView.as_view(), name='transport-list-create'),
    path('transports/<int:pk>/', TransportRetrieveUpdateDestroyView.as_view(), name='transport-detail'),

    path('accommodations/', AccomodationListCreateView.as_view(), name='accommodation-list-create'),
    path('accommodations/<int:pk>/', AccomodationRetrieveUpdateDestroyView.as_view(), name='accommodation-detail'),

    path('bookings/', BookingListCreateView.as_view(), name='booking-list-create'),
    path('bookings/<int:pk>/', BookingRetrieveUpdateDestroyView.as_view(), name='booking-detail'),

    path('payments/', PaymentListCreateView.as_view(), name='payment-list-create'),
    path('payments/<int:pk>/', PaymentRetrieveUpdateDestroyView.as_view(), name='payment-detail'),

    path('reviews/', PackageReviewListCreateView.as_view(), name='review-list-create'),
    path('reviews/<int:pk>/', PackageReviewRetrieveUpdateDestroyView.as_view(), name='review-detail'),
]
