# Generated by Django 5.0.3 on 2024-03-16 01:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserRegistration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(blank=True, max_length=30)),
                ('last_name', models.CharField(blank=True, max_length=30)),
                ('username', models.CharField(blank=True, max_length=30, unique=True)),
                ('email', models.EmailField(blank=True, max_length=254, unique=True)),
                ('password', models.CharField(blank=True, max_length=128)),
                ('confirm_password', models.CharField(blank=True, max_length=128)),
                ('user_type', models.CharField(choices=[('email', 'Email'), ('username', 'Username')], default='email', max_length=10)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'User Registration',
                'verbose_name_plural': 'User Registrations',
            },
        ),
    ]