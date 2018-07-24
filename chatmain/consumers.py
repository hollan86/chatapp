import asyncio
import json
from django.contrib.auth import get_user_model
from channels.consumer import AsyncConsumer
from channels.db import database_sync_to_async
import jwt
from rest_framework_jwt.serializers import VerifyJSONWebTokenSerializer
from rest_framework import serializers
from channels.http import AsgiHandler, AsgiRequest
from channels.exceptions import StopConsumer

from .models import Message, Thread, User

class ChatConsumer(AsyncConsumer):
    async def websocket_connect(self,event):
        print('connected',event)

        #========================= 
        # await self.send({
        #     "type":"websocket.accept"
        # })
        #============================= 
        # CHECKING USER
        # print('token:  ',self.scope['query_string'].decode())
        # django_request = AsgiRequest(event)
        #AUTHENTICATION CODE!
        token = self.scope['query_string'].decode('utf-8')
        try:
            data = {'token': token}
            valid_data = VerifyJSONWebTokenSerializer().validate(data)
            user = valid_data['user']
            self.scope['user'] = valid_data['user']
            
            other_user = self.scope['path_remaining'][1:]
            me = self.scope['user']
            print(other_user,me)
            us = User.objects.get(id=other_user)
            thread_obj = await self.get_thread(me,us.username)
            print(thread_obj)
            self.thread_obj = thread_obj
            # chat_room = "thread_{}".format(thread_obj.id)
            chat_room = f"thread_{thread_obj.id}"
            self.chat_room = chat_room
            print('CHANNEL NAME: ',self.channel_name)
            await self.channel_layer.group_add(
                chat_room,
                self.channel_name
            )
            print('CHANNEL NAME(new): ',self.channel_name)

            await self.send({
                "type":"websocket.accept"
            })
        except (KeyError, jwt.InvalidTokenError, serializers.ValidationError,):
            # ...
            # ...
            await self.send({
                "type":"websocket.close"
            }) 
        # other_user = self.scope['url_route']['kwargs']['username']
        
        # print(self.scope['headers'])
        # await asyncio.sleep(5)

        # print(self.thread_obj.message_set.all())
        # self.thread_obj.message_set.all()
        loaded_msgs = [ {"me":i.text} if i.user.username == self.scope['user'].username else {"other":i.text} for i in self.thread_obj.message_set.all()]

        print(loaded_msgs)

        chat_thread = {
            "init":loaded_msgs
        }

        await self.send({
            "type":"websocket.send",
            "text":json.dumps(chat_thread)
        })

        bot_hello = {
            "msg":"Hello from the back-end",
            "user":"bot"
        }
        await self.send({
            "type":"websocket.send",
            "text":json.dumps(bot_hello)
        })
    
    async def websocket_receive(self,event):
        print('receive',event)
        received_data = json.loads(event['text'])
        received_msg = received_data.get('msg')
        user = self.scope['user']
        # if user.is_authenticated:

        await self.create_chat_message(user,received_msg)

        await self.channel_layer.group_send(
            self.chat_room,
            {
                "type":"chat.message",
                "text":event['text']
            }
        )
        print('chat room: ',self.chat_room)
        
        # await self.send({
        #     "type":"websocket.send",
        #     "text":event['text']
        # })
    
    async def chat_message(self,event):
        await self.send({
            "type":"websocket.send",
            "text":event['text']
        })
    
    async def websocket_disconnect(self,event):
        print('disconnected',event)
        await self.channel_layer.group_discard(
            self.chat_room,
            self.channel_name
        )
        print('DISCONNECT: ', self.chat_room)

        raise StopConsumer()

        
    @database_sync_to_async
    def get_thread(self,user,other_username):
        return Thread.objects.get_or_new(user,other_username)[0]

    @database_sync_to_async
    def create_chat_message(self,me, msg):
        thread_obj = self.thread_obj
        return Message.objects.create(thread=thread_obj,user=me,text=msg)