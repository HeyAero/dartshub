from channels.generic.websocket import AsyncWebsocketConsumer
import json
from channels.layers import get_channel_layer

channel_layer = get_channel_layer()

class LobbyConsumer(AsyncWebsocketConsumer):
    async def connect(self):

        await channel_layer.send(self.channel_name, {
            "type": "chat.message",
            "text": channel_layer.groups, 
            })  
 
        await self.accept()
      
   

class RoomConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'game_%s' % self.room_name
        
        players = channel_layer.groups.get(self.room_group_name,0)
        
        if players == 0 or len(players.keys()) == 1:
            await self.channel_layer.group_add(
                self.room_group_name,
                self.channel_name
            )

            if not players == 0 and len(players.keys()) == 2:
                await self.channel_layer.group_send(
                    self.room_group_name,
                    {
                        'type': 'players_connected',
                        'data': 'Players Connected' ,
                    }
                )          
                    
            await self.accept()
        else:
            
            await self.close()
        
    
    async def players_connected(self, event):
        playerData = event['data']

        await self.send(text_data = json.dumps({
            'data' : playerData,
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


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    pass