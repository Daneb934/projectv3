from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name','gender']

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'userName', 'body']

class ProductSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True)

    class Meta:
        model = Product
        fields = ['id','name','price','img','img2','img3','img4','description','rating','category','comments','orderCount','available','gender']

    def create(self, validated_data):
        comments = validated_data.pop('comments')
        product = Product.objects.create(**validated_data)
        for comment in comments:
            Comment.objects.create(**comment, product=product)
        return product

    def update(self, instance, validated_data):

        comments = validated_data.pop('comments')
        instance.name = validated_data.get("name", instance.name)
        instance.price = validated_data.get("price", instance.price)
        instance.img = validated_data.get("img", instance.img)
        instance.img2 = validated_data.get("img2", instance.img2)
        instance.img3 = validated_data.get("img3", instance.img3)
        instance.img4 = validated_data.get("img4", instance.img4)
        instance.description = validated_data.get("description", instance.description)
        instance.rating = validated_data.get("rating", instance.rating)
        instance.category = validated_data.get("category", instance.category)
        instance.orderCount = validated_data.get("orderCount", instance.orderCount)
        instance.available = validated_data.get("available", instance.available)
        instance.gender = validated_data.get("gender", instance.gender)

        instance.save()
        keep_comments = []
        for comment in comments:
            if "id" in comment.keys():
                if Comment.objects.filter(id=comment["id"]).exists():
                    c = Comment.objects.get(id=comment["id"])
                    c.userName = comment.get('userName', c.userName)
                    c.body = comment.get('body', c.body)
                    c.save()
                    keep_comments.append(c.id)
                else:
                    continue
            else:
                c = Comment.objects.create(**comment, product=instance)
                keep_comments.append(c.id)

        for comment in instance.comments:
            if comment.id not in keep_comments:
                comment.delete()

        return instance

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'login', 'password', 'liked', 'myOrders']
