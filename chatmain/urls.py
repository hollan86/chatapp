from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include, url
from .views import UserSearchList, getChats

app_name = 'chatmain'
urlpatterns = [
    url(r'^users/', UserSearchList.as_view(), name='user-filter'),
    url(r'^chats/', getChats.as_view(), name='user-chats'),
]
