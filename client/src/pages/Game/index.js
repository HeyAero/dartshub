import React, { useEffect } from 'react';
import { CurrentScore, Legdisplay, OpponentScore, ScoreRundown, Video } from '../../components'
import { useLocation } from 'react-router-dom'
const Game = () => {

    const [oppUsername, setOppUsername] = React.useState("")
    const [inputScore, setInputScore] = React.useState(0)
    const [myScore, setMyScore] = React.useState(501)
    const [oppScore, setOppScore] = React.useState(501)
    const [legsWon, setLegsWon] = React.useState({me: 0, opp: 0})
    const [socket, setSocket] = React.useState()
    const [currentLeg, setCurrentLeg] = React.useState(1)
    const [gameOver, setGameOver] = React.useState(false)
    

    let data = useLocation()
    let code = data.state.code;
    let import_legs = data.state.legs;
    let creator = data.state.creator;

    const [turn, setTurn] = React.useState(creator)
    const [legs, setLegs] = React.useState(import_legs || 0)

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
            } else if (data.init_data) {
                console.log(data.init_data)
                if (data.init_data.username !== localStorage.getItem('username')) {
                    setOppUsername(data.init_data.username)
                    if (data.init_data.legs) {
                        setLegs(data.init_data.legs)
                    }
                }
            } else if (data.message) {
                console.log('message recieved');
            } else if (data.score.creator !== creator) {
                updateScore(data.score.score, setOppScore)
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
                    'data': { username: localStorage.getItem('username'), legs: legs }
                })); 
            } catch (error) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        runConnect();
    }, [])

    useEffect(() => {
        if (!myScore) {
            setLegsWon(prevstate => {return {...legsWon, me: prevstate.me + 1}})
            checkLegs()
        } else if (!oppScore) {
            setLegsWon(prevstate => {return{...legsWon, opp: prevstate.opp + 1}})
            checkLegs()
        } else {
            console.log("ERROR")
        }
    }, [myScore, oppScore])

    useEffect(() => {
        if ((legs / 2) < legsWon.me) {
            setGameOver(true);
        } else if ((legs / 2) < legsWon.opp) {
            setGameOver(true);
        }
    }, [legsWon])

    function checkLegs() {
        if (currentLeg < legs) {
            // console.log((legs / 2))
            // console.log((legsWon.me))
            // console.log((legs / 2) < legsWon.me)
            // if ((legs / 2) < legsWon.me) {
            //     endGame(true)
            // } else if ((legs / 2) < legsWon.opp) {
            //     endGame(false)
            // }
            setCurrentLeg(prevstate => prevstate + 1)
            resetGame();
        } else {
            setGameOver(true);
        }
    }

    function resetGame() {
        setMyScore(501);
        setOppScore(501);
    }

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

    function updateScore(score, which) {
        setTurn(prevstate => !prevstate);
        which(
            prevstate => {
                if(prevstate <= score) {

                    return 0
                } else {
                    return prevstate - score
                }
            })
    }

    function handleScoreSubmit(e) {
        e.preventDefault();
        sendScore();
        updateScore(inputScore, setMyScore, "me")
    }

    function handleScoreChange(e) {
        setInputScore(e.target.value)
    }
    
    function whoIsWinning() {
        if (legsWon.me > legsWon.opp) {
            return <p>Congrats {localStorage.getItem('username')} you have won!</p>
        } else {
            return <p>{oppUsername} won!</p>
        }
    }

    return (
        <>
            <div className="Game-layout">
                <div className="display-winner" style={gameOver ? {display: "block"} : {display: "none"}}>
                    <p>{whoIsWinning()}</p>
                    <a href="/user">Return home.</a>
                </div>
                <div id="CurrentScore-layout">
                    <CurrentScore myScore={myScore} myName={localStorage.getItem('username')} />
                </div>
                <div id="OpponentScore-layout">
                    <OpponentScore oppScore={oppScore} oppUsername={oppUsername} />
                </div>

                <div id="Legdisplay-layout">
                    <Legdisplay currentLeg={currentLeg} legs={legs} legsWon={legsWon} />
                </div>
                <div id="ScoreRundown-layout">
                    <ScoreRundown />
                </div>
                <div id="Enter-Score">
                    <form onSubmit={handleScoreSubmit}>
                        <input type="number" id="score" placeholder="Enter Round Score Here" disabled={!turn} onChange={handleScoreChange} value={inputScore} min="1" max="180"/>
                        <input type="submit" id="submit-score" value="Submit"/>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Game;