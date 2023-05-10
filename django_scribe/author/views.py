from curses.ascii import US
from re import U
from urllib import request
from rest_framework.views import APIView
from rest_framework.response import Response

from Books.serializer import BookSerializer
from Books import serializer
from .models import  Author
from .serializer import AuthorSerializer
from Books.models import Book
from users.models import User
from django.http import Http404
from rest_framework import status
# Create your views here.

class AuthorAPI(APIView):
    def get(self, request):
        authors = Author.objects.all()
        serializer = AuthorSerializer(authors, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class AuthorInfoAPI(APIView):
    def get(self, request, pk):
        author = Author.objects.get(id = pk)
        serializer = AuthorSerializer(author)
        print(serializer.data)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = AuthorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AuthorBooksAPI(APIView):
    def get(self, request, pk):
        author = Author.objects.get(id = pk)
        books = Book.objects.filter(author = author)
        print(books)
        serializer = BookSerializer(books, many = True)
        return Response(serializer.data)

class AuthorRatingAPI(APIView):
    def get(self, request, pk):
        rating = Author.objects.get(id = pk).rating
        return Response({'rating':rating})
    
    def post(self, request, pk):
        author = Author.objects.get(id = pk)
        author.rating += request.data
        author.ratedUsersNo += 1
        averageRating = float(author.rating/author.ratedUserNo)
        return Response({'Avegare rating':averageRating})

class AuthorRewardPoint(APIView):
    def get(self, request, pk):
        author = Author.objects.get(id = pk)
        Books = Book.objects.filter(author = author)
        noOfBooks = Books.__len__()

        rewardPoints = noOfBooks*1000
        return Response({"reward points": rewardPoints})

        