from django.db import models

# DB 테이블 만드는곳 필요없을듯.
"""
class Nutrient(models.Model):
    nutrient_id = models.BigIntegerField(primary_key = True)  # pk 라는 뜻
    nutrient_name = models.TextField()
    nutrient_image_url = models.TextField()
    nutrient_brand = models.TextField()
    nutrient_intake = models.TextField()
    nutrient_caution = models.TextField()
    nutrient_expiration = models.TextField()
    nutrient_material = models.TextField()
    nutrient_pregnant = models.BooleanField()
    nutrient_child = models.BooleanField()
    nutrient_gender = models.IntegerField()
    nutrient_type = models.ForeignKey(Nutrient_type, on_delete=models.CASCADE)  # fk 설정

    class Meta:
        db_table = 'nutrient' # db테이블 이름인듯?     
"""
