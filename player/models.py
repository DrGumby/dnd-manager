from django.db import models

# Create your models here.
class Player(models.Model):
    name = models.CharField(max_length=200)
    hp = models.PositiveIntegerField()
    exp = models.PositiveIntegerField()
    money = models.PositiveIntegerField()

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    count = models.PositiveIntegerField(default=1)
    player = models.ForeignKey(Player, related_name='items', on_delete=models.CASCADE)
