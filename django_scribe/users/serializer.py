from rest_framework import serializers

from .models import User

class UserSerializer(serializers.ModelSerializer):
    # my_discount = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = "__all__"

    