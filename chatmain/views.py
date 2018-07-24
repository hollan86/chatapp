from django.shortcuts import render
from django.views.generic import View
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework import generics
from .models import User, Thread
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt import authentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

class FrontendRenderView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "index.html",{})

class UserSearchList(generics.ListAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (authentication.JSONWebTokenAuthentication,)

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """

        queryset = User.objects.all()
        username = self.request.query_params.get('username', None)
        print(username)
        if username is not None:
            # print(queryset)
            queryset = queryset.filter(username__icontains=username)
        return queryset

class getChats(APIView):
    """
    View to list all users in the system.

    * Requires token authentication.
    * Only admin users are able to access this view.
    """
    # serializer_class = UserSerializer
    authentication_classes = (authentication.JSONWebTokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        """
        Return a list of all users.
        """
        threads = Thread.objects.by_user(request.user)
        usersold = [(t.first.username, t.second.username) for t in threads]
        users = []
        for t in threads:
            users.append({'id':t.first.pk,'name':t.first.username}) if request.user.username == t.second.username else users.append({'id':t.second.pk,'name':t.second.username})
        print(usersold)
        print('---------------------------------')
        print(users)
        return Response(users)
