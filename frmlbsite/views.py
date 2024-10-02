from rest_framework import viewsets
from .models import Videos
from .serializers import VideosSerializer

# Create your views here.
class VideosViewSet(viewsets.ModelViewSet):
    serializer_class = VideosSerializer

    def get_queryset(self):
        category = self.request.query_params.get('category')
        if category:
            return Videos.objects.filter(category=category)
        return Videos.objects.all()
    
#categoria exemplo de url http://127.0.0.1:8000/videos/?category=c1 