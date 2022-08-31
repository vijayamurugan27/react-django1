from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')


from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from first.models import React
from first.serializers import ReactSerializer
from django.http import Http404

class ReactView(APIView):
    def get(self, request):
        output = [{"name":output.name, "department":output.department, 'id':output.id } for output in React.objects.all()]
        return Response(output)
    def post(self,request):
        serializer = ReactSerializer(data = request.data)
        if serializer.is_valid(raise_exception = True):
            serializer.save()
            return Response(serializer.data)

    # def get(self, request, format=None):
    #         snippets = React.objects.all()
    #         serializer = ReactSerializer(snippets, many=True)
    #         return Response(serializer.data)

    # def post(self, request, format=None):
    #     serializer = ReactSerializer(data=request.data)
    #     # serializer.create()
    #     if serializer.is_valid():  
    #         # serializer.create()
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
