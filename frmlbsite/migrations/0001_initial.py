# Generated by Django 5.1 on 2024-10-01 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Videos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('video_id', models.TextField(max_length=50)),
                ('user_type', models.CharField(max_length=20)),
                ('category', models.TextField(max_length=3)),
                ('description', models.CharField(max_length=255)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
