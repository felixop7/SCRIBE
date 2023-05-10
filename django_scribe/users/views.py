from urllib import request
from rest_framework.views import APIView
from rest_framework.response import Response

from Books.serializer import BookSerializer
from .models import  User
from .serializer import UserSerializer
from Books.models import Book
from django.http import Http404
from rest_framework import status

from . import serializer
# Create your views here.

class UserAPI(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        print(serializer.data)
        return Response(serializer.data)
        
class UserInfoAPI(APIView):
    def get(self, request, pk):
        user = User.objects.get(id = pk)
        serializer = UserSerializer(user)
        print(serializer.data)
        return Response(serializer.data)
    

class UserPurchasedBooksAPI(APIView):
    def get(self, request, pk):
        user = User.objects.get(id = pk)
        books = Book.objects.filter(user = user)
        print(books)
        serializer = BookSerializer(books, many = True)
        return Response(serializer.data)

class UserWishlist(APIView):
    
    def get(self, request, pk):
        user_id = request.data["user"]
        book_id = request.data["book"]
        user = User.objects.get(id = pk)
        books = Book.objects.filter(user = user)
        print(books)
        serializer = BookSerializer(books, many = True)
        return Response(serializer.data)
    
    def post(self, request, pk):
        user_id = request.data["user"]
        book_id = request.data["book"]
        wish_book = Book.objects.filter(pk = book_id)
        user = User.objects.get(id = user_id)
        user.wishlist.add(wish_book)
        serializer = BookSerializer(wish_book)
        return Response(serializer.data)