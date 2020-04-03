from django.urls import include, path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'players', views.PlayerViewSet)
router.register(r'items', views.ItemViewSet)

urlpatterns = [
    path('', include(router.urls))
]

