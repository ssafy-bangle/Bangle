from django.db import models


class Member(models.Model):
    member_id = models.BigIntegerField(primary_key=True)
    private_key = models.CharField(max_length=256)
    email = models.TextField()
    nickname = models.TextField()
    provider = models.TextField()
    role = models.TextField()
    dust = models.BigIntegerField()
    user_id = models.TextField()

    class Meta:
        db_table = 'member'


class Author(models.Model):
    author_id = models.BigIntegerField(primary_key=True)
    income = models.BigIntegerField()
    introductions = models.TextField()
    follower = models.BigIntegerField()
    member_id = models.ForeignKey(Member, on_delete=models.CASCADE)

    class Meta:
        db_table = 'author'


class Book(models.Model):
    id = models.BigIntegerField(primary_key=True)
    title = models.TextField()
    genre = models.TextField()
    introduction = models.TextField()
    purchase_price = models.IntegerField()
    rental_price = models.IntegerField()
    address = models.TextField()
    average_score = models.FloatField()
    cover = models.TextField()
    sale_count = models.BigIntegerField()
    total_pages = models.IntegerField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

    class Meta:
        db_table = 'book'

    def __str__(self):
        return f'{self.id} {self.title} {self.introduction}'

