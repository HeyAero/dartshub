import React, { useEffect } from 'react';
import { CurrentScore, Legdisplay, OpponentScore, ScoreRundown, Video } from '../../components'
import { useLocation } from 'react-router-dom'
const Game = () => {

    const [oppUsername, setOppUsername] = React.useState("")

    let data = useLocation()
    let code = data.state.code;
    let legs = data.state.legs;

    const runConnect = () => {
        const chatSocket = new WebSocket('ws://' + 'localhost:8000' +'/ws/chat/'  + code +'/')
        chatSocket.onopen = function() {
            console.log('workingggg')
          }
        
        chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data)

            if (data.success) {
                console.log("success")
                sendUsername();
            } else if (data.username) {
                console.log(data.username)
                if (data.username !== localStorage.getItem('username')) {
                    setOppUsername(data.username)
                }
            } else if (data.message) {
                console.log('message recieved');
            } else if (data.score) {
                console.log('score recieved!');
            } else {
                console.log(`Sorry, server response doesn't match cases`);
            }
        }   
        
        chatSocket.onclose = function(e) {
            console.error('Chat socket closed ');
        }
        
        function sendUsername() {
            try {
                chatSocket.send(JSON.stringify({
                    'type': 'send_username',
                    'data': localStorage.getItem('username')
                })); 
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        runConnect(); 
    }, [])


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
                    <OpponentScore oppUsername={oppUsername} />
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