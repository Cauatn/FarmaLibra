from rest_framework import viewsets
from .models import Videos
from .serializers import VideosSerializer

# Create your views here.
class VideosViewSet(viewsets.ModelViewSet):
    queryset = Videos.objects.all()
    serializer_class = VideosSerializer