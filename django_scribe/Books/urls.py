from django.urls import URLPattern, path

from . import views

urlpatterns = [
    path('', views.AllBooksAPI.as_view(), name='AllBooksAPI'),
    path('<pk>',views.BookAPI.as_view(), name='BookAPI' ),
]