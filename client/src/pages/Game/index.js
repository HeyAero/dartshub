import React, { useEffect, useRef } from 'react';
import { CurrentScore, Legdisplay, OpponentScore, ScoreRundown, Video, GameNavbar, Chat} from '../../components'
import { useLocation } from 'react-router-dom'
import { getAuthInstance } from "../../actions"
const Game = () => {

    const textboxRef = useRef()

    const [oppUsername, setOppUsername] = React.useState("Waiting...")
    const [inputScore, setInputScore] = React.useState(0)
    const [myScore, setMyScore] = React.useState(501)
    const [oppScore, setOppScore] = React.useState(501)
    const [legsWon, setLegsWon] = React.useState({me: 0, opp: 0})
    const [socket, setSocket] = React.useState()
    const [currentLeg, setCurrentLeg] = React.useState(1)
    const [gameOver, setGameOver] = React.useState(false)
    const [thrown, setThrown] = React.useState(0)

    const [myScoresList, setMyScoresList] = React.useState([])
    const [oppScoresList, setOppScoresList] = React.useState([])

    // STATS
    const [stats, setStats] = React.useState({
        three_dart_avg: 0,
        one_dart_avg: 0,
        wins: 0,
        loses: 0,
        total_games: 1,
        highest_finish: 0,
        doubles_hit: 0,
        hit_180: 0,
        hit_160_179: 0,
        hit_140_159: 0,
        hit_120_139: 0,
        hit_100_119: 0,
        hit_80_99: 0,
        hit_60_79: 0,
        hit_0_59: 0
    });  
    

    let data = useLocation()
    let code;
    let import_legs;
    let creator;
    if (data) {
        code = data.state.code;
        import_legs = data.state.legs;
        creator = data.state.creator;
    }

    const [turn, setTurn] = React.useState(creator)
    const [legs, setLegs] = React.useState(import_legs || 0)

    const runConnect = () => {
        const chatSocket = new WebSocket('wss://' + 'dartshub.herokuapp.com' +'/ws/chat/'  + code +'/')
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
                console.log(textboxRef)
                textboxRef.current.value += (data.message + '\n');
                textboxRef.current.scrollTop = textboxRef.current.scrollHeight
                console.log('message recieved');
            } else if (data.score.creator !== creator) {
                updateScore(data.score.score, setOppScore, setOppScoresList)
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
            console.log(stats)
            console.log("Game Continues")
        }
    }, [myScore, oppScore])

    useEffect(() => {
        if ((legs / 2) < legsWon.me) {
            setGameOver(true);
            setStats(prevstate => {return {...stats, wins: prevstate.wins + 1 }})
        } else if ((legs / 2) < legsWon.opp) {
            setGameOver(true);
            setStats(prevstate => {return {...stats, loses: prevstate.loses + 1 }})
        }
    }, [legsWon])

    useEffect(() => {
        if (gameOver) {
            handleStatsSubmit()
        }
    }, [stats])

    function checkLegs() {
        if (currentLeg < legs) {
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

    function updateScore(score, which, list) {
        list(oldArray => [...oldArray, score])
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

    function calcThreeDartAverage(score) {
        let set_thrown = thrown + 1;
        let return_val;
        if (set_thrown == 1) {
            return_val = parseInt(score);
        } else {
            return_val = ((stats.three_dart_avg * (set_thrown - 1)) + parseInt(score)) / set_thrown;
        }
        return return_val;
    }

    function calcOneDartAverage(score) {
        let set_thrown = thrown + 1;
        let return_val;
        if (set_thrown == 1) {
            return_val = parseInt(score) / 3;
        } else {
            return_val = (((stats.three_dart_avg * (set_thrown - 1)) + parseInt(score)) / set_thrown) / 3;
        }
        return return_val;
    }

    function handleStatsUpdate(score) {
        let three_dart_avg = calcThreeDartAverage(score);
        let one_dart_avg = calcOneDartAverage(score);
        let hit_180 = stats.hit_180;
        let hit_160_179 = stats.hit_160_179;
        let hit_140_159 = stats.hit_140_159;
        let hit_120_139 = stats.hit_120_139;
        let hit_100_119 = stats.hit_100_119;
        let hit_80_99 = stats.hit_80_99;
        let hit_60_79 = stats.hit_60_79;
        let hit_0_59 = stats.hit_0_59;

        if (score == 180) {
            hit_180 = hit_180 + 1;
        } else if (160 <= score && score < 180) {
            hit_160_179 = hit_160_179 + 1;
        } else if (140 <= score && score  < 160) {
            hit_140_159 = hit_140_159 + 1;
        } else if (120 <= score && score  < 140) {
            hit_120_139 = hit_120_139 + 1;
        } else if (100 <= score && score  < 120) {
            hit_100_119 = hit_100_119 + 1;
        } else if (80 <= score && score  < 100) {
            hit_80_99 = hit_80_99 + 1;
        } else if (60 <= score && score  < 80) {
            hit_60_79 = hit_60_79 + 1;
        } else if (0 <= score && score  < 60) {
            hit_0_59 = hit_0_59 + 1;
        } else {
            console.log("ERROR")
        }

        setStats({...stats, three_dart_avg, one_dart_avg, hit_180, hit_160_179, hit_140_159, hit_120_139, hit_100_119, hit_80_99, hit_60_79, hit_0_59})
    }

    function handleScoreSubmit(e) {
        e.preventDefault();
        setThrown(prevstate => prevstate + 1)
        handleStatsUpdate(inputScore);
        sendScore(inputScore);
        updateScore(inputScore, setMyScore, setMyScoresList)
    }

    function handleScoreChange(e) {
        setInputScore(e.target.value)
    }

    async function handleStatsSubmit() {
        try {
            const response = await getAuthInstance.put('/stats/user/', {
                stats
            })
        } catch (error) {
            throw error;
        }
    }
    
    function whoIsWinning() {
        if (legsWon.me > legsWon.opp) {
            return <p>Congrats {localStorage.getItem('username')} you have won!</p>
        } else {
            return <p>{oppUsername} won!</p>
        }
    }

    return (
        <div id="game-screen">
            <header>
                <GameNavbar />
            </header>
            <div className="Game-layout">
                <div className="display-winner" style={gameOver ? {display: "block"} : {display: "none"}}>
                    <p>{whoIsWinning()}</p>
                    <a href="/user">Return home.</a>
                </div>
                <div className="row">
                    <div className="col-4 d-flex justify-content-center text-center">
                        <CurrentScore myScore={myScore} myName={localStorage.getItem('username')} />
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <div id="Legdisplay-layout" align="center">
                            <Legdisplay currentLeg={currentLeg} legs={legs} legsWon={legsWon} />
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <OpponentScore oppScore={oppScore} oppUsername={oppUsername} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div id="Enter-Score">
                            <form onSubmit={handleScoreSubmit}>
                                <input type="number" id="score" placeholder="Enter Round Score Here" disabled={!turn} onChange={handleScoreChange} value={inputScore} min="1" max="180"/>
                                <input type="submit" id="submit-score" value="Submit" disabled={!turn}/>
                            </form>
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center">
                        <div id="chatbox" align="center">
                            <textarea ref= {textboxRef} id="chat-log" cols="30" rows="10" disabled></textarea><br></br>
                            <Chat ref={textboxRef} chatSocket={socket ? socket: null} />
                        </div>
                    </div>
                    <div className="col-md d-flex justify-content-center">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;