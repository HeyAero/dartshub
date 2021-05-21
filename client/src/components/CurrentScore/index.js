import React from 'react';

const CurrentScore = ({myName, myScore}) => {
    return (
        <div role="div" className="scorecontainer">
            <div id="btncontainer">
                <h2>{myName}</h2>
                <div role="playerscore" className="score" id="team1">{myScore}</div>
            </div>
        </div>
    )
}
export default CurrentScore;