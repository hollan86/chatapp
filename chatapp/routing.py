from django.urls import path, re_path #new! django 2.0
from django.conf.urls import url #old django!
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from channels.security.websocket import AllowedHostsOriginValidator, OriginValidator

from chatmain.consumers import ChatConsumer

application = ProtocolTypeRouter({
    # Empty for now (http->django views is added by default)
    'websocket': AllowedHostsOriginValidator(
        AuthMiddlewareStack(
            URLRouter(
                [
                    url(r"^(?P<username>[\w.@+-]+)", ChatConsumer),
                ]
            )
        )
    )
})