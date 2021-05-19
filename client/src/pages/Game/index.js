import React, { useEffect } from 'react';
import { CurrentScore, Legdisplay, OpponentScore, ScoreRundown, Video } from '../../components'
import { useLocation } from 'react-router-dom'
const Game = () => {

    let data = useLocation()
    let code = data.state.code;
    let legs = data.state.legs;

    useEffect(()=>{
        console.log(code)
        const chatSocket = new WebSocket('ws://' + 'localhost:8000' +'/ws/chat/'  + code +'/')
        
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

    console.log("TEST")
    console.log(code)
    console.log(legs)

    return (
        <>
            <div className="Game-layout">
                {code}
                {legs}
                <div id="CurrentScore-layout">
                    <CurrentScore />
                </div>
                <div id="OpponentScore-layout">
                    <OpponentScore />
                </div>

                <div id="Legdisplay-layout">
                    <Legdisplay />
                </div>
                <div id="ScoreRundown-layout">
                    <ScoreRundown />
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