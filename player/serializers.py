from rest_framework import serializers
from .models import Player, Item

class PlayerSerializer(serializers.HyperlinkedModelSerializer):
    items = serializers.HyperlinkedRelatedField(many=True, view_name='item-detail', read_only=True)
    class Meta:
        model = Player
        fields = ('id', 'name', 'hp', 'exp', 'money', 'items')

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    player = serializers.HyperlinkedRelatedField(many=False, queryset=Player.objects.all(), view_name='player-detail')
    class Meta:
        model = Item
        fields = ('name', 'description', 'count', 'player')
