from django.db import models

class UserRegistration(models.Model):
    USERNAME_CHOICES = [
        ("email", "Email"),
        ("username", "Username"),
    ]

    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    username = models.CharField(max_length=30, unique=True, blank=True)
    email = models.EmailField(unique=True, blank=True)
    password = models.CharField(max_length=128, blank=True)
    confirm_password = models.CharField(max_length=128, blank=True)
    user_type = models.CharField(max_length=10, choices=USERNAME_CHOICES, default="email")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.email

    class Meta:
        app_label = "api_app"
        verbose_name = "User Registration"
        verbose_name_plural = "User Registrations"