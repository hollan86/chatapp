from chatmain.serializers import UserSerializer
from django.contrib.auth.signals import user_logged_in

def jwt_response_payload_handler(token, user=None, request=None):
    if user and request:
        user_logged_in.send(sender=user.__class__, request=request, user=user)
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data
    }