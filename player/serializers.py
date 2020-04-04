from rest_framework import serializers
from .models import Player, Item

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    player = serializers.PrimaryKeyRelatedField(many=False, queryset=Player.objects.all())
    class Meta:
        model = Item
        fields = ('id', 'name', 'description', 'count', 'player')


class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    items = ItemSerializer(many=True, read_only=True)
    class Meta:
        model = Player
        fields = ('id', 'name', 'hp', 'exp', 'money', 'items')

