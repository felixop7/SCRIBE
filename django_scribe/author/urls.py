from django.urls import URLPattern, path

from . import views

urlpatterns = [
    path('', views.AuthorAPI.as_view(), name='AuthorAPI'),
    path('<pk>', views.AuthorInfoAPI.as_view(), name='AuthorInfoAPI'),
    path('<pk>/books', views.AuthorBooksAPI.as_view(), name='AuthorBooksAPI'),
    path('<pk>/rating', views.AuthorRatingAPI.as_view(), name='AuthorRatingAPI'),
    path('<pk>/rewardpoints', views.AuthorRewardPoint.as_view(), name='AuthorRewardPoint'),
]