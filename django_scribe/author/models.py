from django.db import models
# from Books.models import Book
# Create your models here.

class Author(models.Model):

    name = models.CharField(max_length=120)
    contact = models.CharField(max_length=15)
    email = models.EmailField(null=True, blank= True)
    photo = models.ImageField(null= True, blank=True)
    rating = models.IntegerField(null=True, blank=True)
    ratedUsersNo = models.IntegerField(null = True, default=0)
    rewardPoints = models.IntegerField(null=True, blank= True)


    def __str__(self) -> str:
        return self.name
    
    # @property
    # def rating(self):
    #     pass