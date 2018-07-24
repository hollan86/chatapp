from django.contrib import admin
from django.urls import path, re_path
from django.conf.urls import include, url

from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token

from chatmain.views import FrontendRenderView

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/auth/login/', obtain_jwt_token, name='api-login'),
    re_path(r'^api/token/refresh/', refresh_jwt_token, name='token-refresh'),
    url(r'^auth/', include('djoser.urls')),
    url(r'^auth/', include('djoser.urls.jwt')),
    re_path(r'^chat-main/',include("chatmain.urls")),
]


urlpatterns += [
   re_path(r'(?P<path>.*)',FrontendRenderView.as_view(),name='home')
]