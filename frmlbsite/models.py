from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth.models import User
from django.urls import reverse

# Register your models here.

class Videos(models.Model):
    video_id = models.TextField(max_length=50)
    user_type = models.CharField(max_length=20)
    category = models.TextField(max_length=3)
    description = models.CharField(max_length=255)
    created_on = models.DateTimeField(auto_now_add=True)
