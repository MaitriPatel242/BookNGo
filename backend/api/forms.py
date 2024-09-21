from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import User

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        fields = ["email", "first_name", "last_name"]
        error_class = "error"

class CustomUserChangeForm(UserChangeForm):
    class Meta(UserChangeForm.Meta):
        model = User
        fields = ["email", "first_name", "last_name"]
        error_class = "error"   







# forms.py

# from django import forms

# class ContactForm(forms.Form):
#     email = forms.EmailField(label='Your Email', max_length=100)
#     subject = forms.CharField(label='Subject', max_length=100)
#     message = forms.CharField(widget=forms.Textarea, label='Your Message')
