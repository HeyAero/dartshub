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


            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'tester_message',
                    'playerData': 'dummy data' ,
                    }
            )          
                    
            await self.accept()
        else:
            
            await self.close()
        
    
    async def tester_message(self, event):
        playerData = event['playerData']

        await self.send(text_data = json.dumps({
            'playerData' : playerData,
            'channel' : 'RoomConsumer.users'
        }))

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        await self.channel_layer.group_send(
            self.room_group_name,
            {
            'type': 'chat_message',
            'message': message
            }
        )
    
    async def chat_message(self, event):
        message = event['message']

        await self.send(text_data = json.dumps({
            'message' : message,
           
        }))


    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    pass