from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .serializers import PlayerSerializer, ItemSerializer
from .models import Player, Item
# Create your views here.

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'players': reverse('player-list', request=request, format=format),
        'items': reverse('item-list', request=request, format=format)
    })


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
