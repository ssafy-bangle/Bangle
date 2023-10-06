from rest_framework import serializers
from .models import Book

class StringSerializers(serializers.Serializer):
    string_list = serializers.ListField(child=serializers.CharField())

class BookSerializers(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'
