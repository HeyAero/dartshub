import React from 'react';
import { Sidenav, UserInformation, StatInformation, CreateGame } from '../../components'
import { getAuthInstance } from "../../actions"

const User = () => {
    // User Information
    const [auth, setAuth] = React.useState(false);
    const [username, setUsername] = React.useState(""); 
    const [email, setEmail] = React.useState(""); 
    // Stats Data
    const [threeDartAvg, setThreeDartAvg] = React.useState(""); 
    const [oneDartAvg, setOneDartAvg] = React.useState(""); 
    const [wins, setWins] = React.useState(""); 
    const [loses, setLoses] = React.useState(""); 
    const [totalGames, setTotalGames] = React.useState(""); 
    const [highestFinish, setHighestFinish] = React.useState(""); 
    const [doublesHit, setDoublesHit] = React.useState(""); 
    const [hit180, setHit180] = React.useState(""); 
    const [hit160, setHit160] = React.useState(""); 
    const [hit140, setHit140] = React.useState(""); 
    const [hit120, setHit120] = React.useState(""); 
    const [hit100, setHit100] = React.useState(""); 
    const [hit80, setHit80] = React.useState(""); 
    const [hit60, setHit60] = React.useState(""); 
    const [hit0, setHit0] = React.useState(""); 
    // Modals
    const [showCreateGame, setShowCreateGame] = React.useState(false);
    async function getStatsInformation() {
        try {
            const response = await getAuthInstance.get('/stats/user/')
            setThreeDartAvg(response.data.three_dart_avg);
            setOneDartAvg(response.data.one_dart_avg);
            setWins(response.data.wins);
            setLoses(response.data.loses);
            setTotalGames(response.data.total_games);
            setHighestFinish(response.data.highest_finish);
            setDoublesHit(response.data.doubles_hit);
            setHit180(response.data.hit_180);
            setHit160(response.data.hit_160_179);
            setHit140(response.data.hit_140_159);
            setHit120(response.data.hit_120_139);
            setHit100(response.data.hit_100_119);
            setHit80(response.data.hit_80_99);
            setHit60(response.data.hit_60_79);
            setHit0(response.data.hit_0_59);
        } catch (error) {
            throw error;
        }
    }

    React.useEffect(() => {
        async function getUserInformation() {
            try {
                const response = await getAuthInstance.get('/users/')
                setUsername(response.data.username);
                setEmail(response.data.email);
                setAuth(true);
                getStatsInformation()
            } catch (error) {
                setAuth(false);
                throw error;
            }
        }
        getUserInformation()
    }, [])

    return (
        <>
            { auth ? 
            <div className="User-page">
                <div id="createGameModal" style={showCreateGame ? {display: "block"} : {display: "none"}}>
                    <CreateGame/>
                </div>
                <div id="Sidenav-layout">
                    <Sidenav showCreateGame={showCreateGame} setShowCreateGame={setShowCreateGame} />
                </div>
                <div id="UserInformation-layout">
                    <UserInformation username={username} email={email} />
                </div>
                <div id="StatInformation-layout">
                    <StatInformation
                        threeDartAvg={threeDartAvg}
                        oneDartAvg={oneDartAvg}
                        wins={wins}
                        loses={loses}
                        totalGames={totalGames}
                        highestFinish={highestFinish}
                        doublesHit={doublesHit}
                        hit180={hit180}
                        hit160={hit160}
                        hit140={hit140}
                        hit120={hit120}
                        hit100={hit100}
                        hit80={hit80}
                        hit60={hit60}
                        hit0={hit0}
                    />
                </div>

            </div>
            :
            <div>
                YOU ARE NOT AUTHORISED.
                LOGIN!
            </div>
            }  

        </>
    )
}

export default User;