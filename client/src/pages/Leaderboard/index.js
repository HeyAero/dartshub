import React from "react";
import { LeaderboardNav, ThreeDartTable, WinsTable } from '../../components'

const Leaderboard = () => {

    return (
        <>
            <div id="Leaderboard-layout">
                
                <header id="LeaderNav">
                    <LeaderboardNav />
                </header>
                <div id="WinsTable-layout">
                    <WinsTable />
                </div>
                <div id="ThreeDart-layout">
                    <ThreeDartTable />
                </div>

            </div>


        </>
    )
}

export default Leaderboard;