from django.contrib.auth.models import User
from django.db import models
from django.contrib.postgres.fields import ArrayField

class Category(models.Model):
    name = models.CharField(max_length=90)
    gender = models.IntegerField()


class Product(models.Model):
    name = models.CharField(max_length=90)
    price = models.CharField(max_length=30)
    img = models.CharField(max_length=250)
    img2 = models.CharField(max_length=250)
    img3 = models.CharField(max_length=250)
    img4 = models.CharField(max_length=250)
    description = models.CharField(max_length=180)
    rating = models.IntegerField()
    category = models.IntegerField()
    orderCount = models.IntegerField()
    available = models.BooleanField(default=True)
    gender = models.IntegerField()

    @property
    def comments(self):
        return self.comment_set.all()

class Comment(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    userName = models.CharField(max_length=60)
    body = models.CharField(max_length=80)


class Person(models.Model):
    login = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    liked = ArrayField(models.IntegerField(),blank=True)
    myOrders = ArrayField(models.IntegerField(),blank=True)