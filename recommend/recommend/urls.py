from django.urls import path
from . import views
from .views import StringListView

app_name = 'recommend'

urlpatterns = [
    #path('', views.genre_recommend, name = 'genre_recommend'),
    path('api1/string-list/', StringListView.as_view(), name='string-list'),
]