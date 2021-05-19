import React from 'react';

const OpponentScore = ({oppScore, oppUsername}) => {
    return (
        <>
            
                <div id="scorecontainer">
                    <div id="btncontainer">
                        <h2>{oppUsername}</h2>
                        <div className="btn" id="team2">{oppScore}</div>
                    </div>
                </div>
                
         
        </>
    )
}
export default OpponentScore;