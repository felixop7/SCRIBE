from rest_framework import serializers

from .models import Author

class AuthorSerializer(serializers.ModelSerializer):
    # my_discount = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = Author
        fields = "__all__"

    