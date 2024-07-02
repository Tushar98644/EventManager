from .models import Gallery
from rest_framework import serializers

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ('id','title','image')