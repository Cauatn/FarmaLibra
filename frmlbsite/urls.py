from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import VideosViewSet

router = DefaultRouter()
router.register(r'', VideosViewSet, basename='videos')

urlpatterns = [
    path('', include(router.urls)),
]