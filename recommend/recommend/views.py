from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import StringSerializers


# Create your views here.
class StringListView(APIView):
    def post(self, request, format=None): # 잘됨
        serializer = StringSerializers(data=request.data)

        if serializer.is_valid():
            string_list = serializer.validated_data['string_list']

            return Response({'message' : 'Data received success', 'data': string_list}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)