import React from 'react';

const Legdisplay = ({legs, currentLeg, legsWon}) => {
    return (
        <div id="legCounter">

            <div id="legdisplay">
                <p>Leg:</p>
                <p id="legnum">{currentLeg}/{legs}</p>
                <p>{legsWon.me} - {legsWon.opp}</p>
            </div>

        </div>
    )
}
export default Legdisplay;