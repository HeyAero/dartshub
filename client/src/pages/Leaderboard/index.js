import React from "react";
import { LeaderboardNav, ThreeDartTable, WinsTable } from '../../components'

const Leaderboard = () => {

    return (
        <>
            <div id="Leaderboard-layout">
                
                <header id="LeaderNav">
                    <LeaderboardNav />
                </header>
                <div className="row">
                    <div className="col-sm-6">
                        <WinsTable />
                    </div>
                    <div className="col-sm-6">
                        <ThreeDartTable />
                    </div>
                </div>

            </div>


        </>
    )
}

export default Leaderboard;