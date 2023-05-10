from django.db import models
from author.models import Author
# Create your models here.

class Book(models.Model):
    author = models.ForeignKey(Author, null= True, on_delete= models.SET_NULL)
    title = models.CharField(max_length=120)
    content = models.TextField(blank= True, null= True)
    price = models.DecimalField(max_digits=15, decimal_places=2, default= 99.99)
    cover_photo = models.ImageField(null = True, blank = True)
    file = models.FileField(null=True, blank = True)
    is_published = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.title