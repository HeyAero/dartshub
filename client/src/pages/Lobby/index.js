import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Lobby= () => {
    const [rooms, setRooms] = React.useState([]);

    useEffect(() => {
        const chatSocket = new WebSocket('wss://dartshub.herokuapp.com/ws/game/')
   
        chatSocket.onopen = function() {
            console.log('connected to lobby')
        }
    
        chatSocket.onmessage = function(e) {
            console.log(e)
            const data = JSON.parse(e.data)
            console.log(data)
            const list = data.map( room => {
                
                return {room : room.fields.rname}
               })
            console.log(list)
            if(list){
                setRooms(prev => list)
            }
        }   
        
        chatSocket.onclose = function(e) {
            console.error('lobby socket closed ');
        }

        return () => {
            chatSocket.close()
          }
    }, [])

    const renderLobby =() => {
        if(rooms.length) {
        return rooms.map( (r, i)=> {  
            console.log(r)
            let name =r.room.replace('game_','')
            return (
                <div id='roomdiv' className="row" key= {i}>
                    <div class="col-md-3 text-center">
                        <h5>RoomID : {i+1}</h5>
                    </div>
                    <div class="col-md-9">
                        <Link to={{
                            pathname: "/game",
                            state: {code: name, creator:false}}}>Name: {name}</Link>
                    </div>
                </div>
            )
        })
        }else {
            return (<p>No Games Currently available</p>)
        }
    }
   

    return (
        <div id="lobby">
                <h1>Available Games!</h1>
                <h4>click to enter room</h4>
                {renderLobby()}
        </div>
    )



}

export default Lobby