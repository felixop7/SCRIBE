from rest_framework.views import APIView
from rest_framework.response import Response
from .models import  Book
from .serializer import BookSerializer
from rest_framework import status

# Create your views here.

class AllBooksAPI(APIView):
    def get(self, request):
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
        
        print(serializer.data)
        return Response(serializer.data)

    def post(self, request):
            serializer = BookSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BookAPI(APIView):
    def get(self, request, pk):
        book = Book.objects.get(id = pk)
        serializer = BookSerializer(book)
        print(serializer.data)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = BookSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
