from django.urls import URLPattern, path

from . import views

urlpatterns = [
    path('', views.UserAPI.as_view(), name='UserAP'),
    path('<pk>', views.UserInfoAPI.as_view(), name='UserInfoAPI'),
    path('<pk>/purchased', views.UserPurchasedBooksAPI.as_view(), name='UserPurchasedBooksAPI'),
    path('<pk>/wishlist', views.UserWishlist.as_view(), name='UserWishlist'),
]