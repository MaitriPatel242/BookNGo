import random
from django.core.management.base import BaseCommand
from django.utils import timezone
from api.models import (
    User, UserProfile, Destination, Package, Transport, Accomodation, Booking, Payment, PackageReview
)

class Command(BaseCommand):
    help = 'Fill the database with realistic dummy data'

    def handle(self, *args, **kwargs):
        # Create Users
        users_data = [
            {"first_name": "John", "last_name": "Doe", "email": "john.doe@example.com"},
            {"first_name": "Jane", "last_name": "Smith", "email": "jane.smith@example.com"},
            {"first_name": "Michael", "last_name": "Johnson", "email": "michael.johnson@example.com"},
            {"first_name": "Emily", "last_name": "Davis", "email": "emily.davis@example.com"},
            {"first_name": "David", "last_name": "Brown", "email": "david.brown@example.com"},
        ]

        users = []
        for user_data in users_data:
            user = User.objects.create(
                first_name=user_data['first_name'],
                last_name=user_data['last_name'],
                email=user_data['email'],
                is_active=True,
                is_staff=False
            )
            users.append(user)

        # Create User Profiles
        cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix']
        genders = ['Male', 'Female']

        for i, user in enumerate(users):
            UserProfile.objects.create(
                first_name=user.first_name,
                last_name=user.last_name,
                user_id=user,
                gender=random.choice(genders),
                city=cities[i],
            )

        # Create Destinations
        destinations_data = [
            {"name": "Paris", "country": "France", "city": "Paris"},
            {"name": "Tokyo", "country": "Japan", "city": "Tokyo"},
            {"name": "Sydney", "country": "Australia", "city": "Sydney"},
        ]

        destinations = []
        for destination_data in destinations_data:
            destination = Destination.objects.create(
                name=destination_data["name"],
                country=destination_data["country"],
                city=destination_data["city"],
                is_active=True
            )
            destinations.append(destination)

        # Create Packages
        packages_data = [
            {"name": "Romantic Paris Getaway", "duration": 5, "description": "Enjoy the city of love with a 5-day romantic trip.", "price": 2500},
            {"name": "Tokyo Explorer", "duration": 7, "description": "Experience the vibrant culture of Tokyo with this 7-day package.", "price": 3200},
            {"name": "Sydney Adventure", "duration": 10, "description": "Explore the beauty of Sydney in this 10-day adventure package.", "price": 4000},
        ]

        packages = []
        for i, package_data in enumerate(packages_data):
            package = Package.objects.create(
                destination_id=destinations[i],
                rating=round(random.uniform(4, 5), 1),
                price=package_data["price"],
                name=package_data["name"],
                duration=package_data["duration"],
                description=package_data["description"],
                is_active=True
            )
            packages.append(package)

        # Create Transport Options
        transports_data = [
            {"type": "Flight", "company_name": "Air France", "price": 800},
            {"type": "Flight", "company_name": "Japan Airlines", "price": 950},
            {"type": "Flight", "company_name": "Qantas", "price": 1100},
        ]

        transports = []
        for transport_data in transports_data:
            transport = Transport.objects.create(
                type=transport_data["type"],
                company_name=transport_data["company_name"],
                price=transport_data["price"],
                is_active=True
            )
            transports.append(transport)

        # Create Accommodations
        accommodations_data = [
            {"name": "Hotel Le Meurice", "room_type": "Suite", "price": 500},
            {"name": "Park Hyatt Tokyo", "room_type": "Double", "price": 350},
            {"name": "Four Seasons Sydney", "room_type": "Suite", "price": 600},
        ]

        accommodations = []
        for i, accommodation_data in enumerate(accommodations_data):
            accommodation = Accomodation.objects.create(
                destination_id=destinations[i],
                name=accommodation_data["name"],
                room_type=accommodation_data["room_type"],
                price=accommodation_data["price"],
                is_active=True
            )
            accommodations.append(accommodation)

        # Create Bookings
        bookings = []
        for i in range(5):
            booking = Booking.objects.create(
                user_id=users[i],
                total_people=random.randint(1, 4),
                package_id=packages[random.randint(0, 2)],
                trasport_id=transports[random.randint(0, 2)],
                accomodation_id=accommodations[random.randint(0, 2)],
                start_date=timezone.now().date(),
                total_price=random.uniform(2500, 5000),
                is_active=True
            )
            bookings.append(booking)

        # Create Payments
        for booking in bookings:
            Payment.objects.create(
                booking_id=booking,
                date=timezone.now().date(),
                amount=random.randint(500, 1000),
                type=random.choice(['Credit Card', 'Debit Card', 'PayPal']),
                is_active=True
            )

        # Create Package Reviews
        reviews_data = [
            "Amazing trip! Everything was perfectly organized.",
            "Great experience, will definitely recommend to friends.",
            "Loved the destination, and the service was excellent.",
            "The trip was fantastic, and the accommodation was top-notch.",
            "Had an unforgettable time, will book again!"
        ]

        for i in range(5):
            PackageReview.objects.create(
                package_id=packages[random.randint(0, 2)],
                user_id=users[i],
                review=reviews_data[i],
                rating=round(random.uniform(4, 5), 1),
                is_active=True
            )

        self.stdout.write(self.style.SUCCESS('Realistic dummy data inserted successfully!'))
