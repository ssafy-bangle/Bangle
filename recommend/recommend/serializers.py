from rest_framework import serializers


class StringSerializers(serializers.Serializer):
    string_list = serializers.ListField(child=serializers.CharField())