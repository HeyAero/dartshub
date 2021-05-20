import React from 'react';

const OpponentScore = ({oppScore, oppUsername}) => {
    return (
        <div role="div" className="scorecontainer">
            <div>
                <h2>{oppUsername}</h2>
                <div className="score" id="team2" align="center">{oppScore}</div>
            </div>
        </div>
    )
}
export default OpponentScore;