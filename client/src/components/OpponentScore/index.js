import React from 'react';

const OpponentScore = ({oppUsername}) => {
    return (
        <>
            
                <div id="scorecontainer">
                    <div id="btncontainer">
                        <h2>{oppUsername}</h2>
                        <div className="btn" id="team2">0</div>
                    </div>
                </div>
                
         
        </>
    )
}
export default OpponentScore;