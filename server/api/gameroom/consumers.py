from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from channels.layers import get_channel_layer
from .models import Room
from django.core import serializers
import asyncio

import json
channel_layer = get_channel_layer()

class LobbyConsumer(AsyncWebsocketConsumer):
    @database_sync_to_async
    def available_roooms(self):
        serialized_data = serializers.serialize("json", Room.objects.filter(users=1))
        return serialized_data
        

    async def connect(self):
        await self.accept()
        
        while True:
            await asyncio.sleep(10)
            l = await self.available_roooms()
            await self.send(text_data = l)


class RoomConsumer(AsyncWebsocketConsumer):

    @database_sync_to_async
    def create_rooom(self):
        obj, created = Room.objects.get_or_create(rname=self.room_group_name)
        users = obj.users
        print(users)
        if users < 2:
            obj.users = users + 1
            obj.save()
            print(obj)
            return (1, users+1)
        else:
            print(obj)
            return (0, users+1)

    
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'game_%s' % self.room_name
        room_available, users = await self.create_rooom()
        
        print(room_available, users)
        if room_available:
            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )

            if users == 2:
                await self.channel_layer.group_send(
                    self.room_group_name,
                    {
                        'type': 'players_connected',
                        'data': 'Players Connected' ,
                    }
                )          
                    
            await self.accept()
        else:
            self.room_group_name =""
            await self.close()
        
    
    async def players_connected(self, event):
        playerData = event['data']

        await self.send(text_data = json.dumps({
            'success' : playerData,
        }))

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        handler = text_data_json['type']
        data = text_data_json['data']

        await self.channel_layer.group_send(
            self.room_group_name,
            {
            'type': handler,
            'data': data
            }
        )
    
    async def chat_message(self, event):
        message = event['data']

        await self.send(text_data = json.dumps({
            'message' : message,
           
        }))
    
    async def score_data(self, event):
        score_dat = event['data']

        await self.send(text_data = json.dumps({
            'score' : score_dat,
           
        }))
    
    @database_sync_to_async
    def delete_rooom(self):
        Room.objects.filter(rname=self.room_group_name).delete()
        print('deleted!')
       

    async def disconnect(self, close_code):
        if self.room_group_name:
            await self.delete_rooom()
            await self.channel_layer.group_send(
                    self.room_group_name,
                    {
                        'type': 'player_disconnected',
                        'data': 'disconnected' ,
                    }
                )       

            await self.channel_layer.group_discard(
                self.room_group_name,
                self.channel_name
            )
        else:
            print("i had no group")
    
    async def player_disconnected(self, event):
        data = event['data']
        await self.close()
        

    pass