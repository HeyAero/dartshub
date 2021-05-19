import React, { useEffect } from 'react';
import { CurrentScore, Legdisplay, OpponentScore, Video } from '../../components'
import Jitsi from 'react-jitsi'


const Game = () => {

    useEffect(()=>{
        const chatSocket = new WebSocket('ws://' + '0.0.0.0:8000' +'/ws/chat/'  + 'asd' +'/')
        
        chatSocket.onopen = function() {
            console.log('workingggg')
          }
        
        chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data)
            console.log(data.success)

            switch (true) {
                case data.success !== null :
                    console.log('success woooo');
                    break;
                case data.message !== null :
                    console.log('message recieved');
                    break;
                case data.score !== null:
                    console.log('score recieved!');
                    break;
                default:
                    console.log(`Sorry, server response doesn't match cases`);
              }
        }   
        
        chatSocket.onclose = function(e) {
            console.error('Chat socket closed ');
        }

    })



    return (
        <>
            <div className="Game-layout">
                <div id="CurrentScore-layout">
                    <CurrentScore />
                </div>
                <div id="OpponentScore-layout">
                    <OpponentScore />
                </div>

                <div id="Legdisplay-layout">
                    <Legdisplay />
                </div>
                <div id="Enter-Score">
                    <form>
                        <input type="number" id="score" placeholder="Enter Round Score Here"></input>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Game;