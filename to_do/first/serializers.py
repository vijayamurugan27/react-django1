from rest_framework import serializers

from first.models import React

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['name', 'department', 'id']

