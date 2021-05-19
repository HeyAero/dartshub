import React, { useEffect } from 'react';
import { CurrentScore, Legdisplay, OpponentScore, ScoreRundown, Video } from '../../components'
import { useLocation } from 'react-router-dom'
const Game = () => {

    const [oppUsername, setOppUsername] = React.useState("")
    const [inputScore, setInputScore] = React.useState(0)
    const [myScore, setMyScore] = React.useState(501)
    const [oppScore, setOppScore] = React.useState(501)
    const [socket, setSocket] = React.useState()
    

    let data = useLocation()
    let code = data.state.code;
    let legs = data.state.legs;
    let creator = data.state.creator;

    const [turn, setTurn] = React.useState(creator)

    const runConnect = () => {
        const chatSocket = new WebSocket('ws://' + 'localhost:8000' +'/ws/chat/'  + code +'/')
        setSocket(chatSocket)
        chatSocket.onopen = function() {
            console.log('workingggg')
          }
        
        chatSocket.onmessage = function(e) {
            const data = JSON.parse(e.data)
            console.log(data)

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
            } else if (data.score.creator !== creator) {
                console.log('score recieved!');
                console.log(data.score)
                console.log("TURN BEFORE RECIEVE" + turn)
                setTurn(prevstate => !prevstate)
                console.log(!true)
                console.log("TURN AFTER RECIEVE" + turn)
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


    function sendScore() {
        try {
            socket.send(JSON.stringify({
                'type': 'score_data',
                'data': { creator, score: inputScore}
            })); 
        } catch (error) {
             console.log(error)
         }
    }

    function handleScoreSubmit(e) {
        e.preventDefault();
        setTurn(prevstate => !prevstate);
        sendScore();
    }

    function handleScoreChange(e) {
        setInputScore(e.target.value)
    }

    return (
        <>
            <div className="Game-layout">
                {code}
                {legs}
                <div id="CurrentScore-layout">
                    <CurrentScore />
                </div>
                <div id="OpponentScore-layout">
                    <OpponentScore myScore={myScore} oppScore={oppScore} oppUsername={oppUsername} />
                </div>

                <div id="Legdisplay-layout">
                    <Legdisplay />
                </div>
                <div id="ScoreRundown-layout">
                    <ScoreRundown />
                </div>
                <div id="Enter-Score">
                    <form onSubmit={handleScoreSubmit}>
                        <input type="number" id="score" placeholder="Enter Round Score Here" disabled={!turn} onChange={handleScoreChange} value={inputScore}/>
                        <input type="submit" id="submit-score" value="Submit"/>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Game;