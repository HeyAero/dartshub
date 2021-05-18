import React from 'react';
import {CurrentScore, RoundCounter, Legdisplay} from '../../components'
const Game = () => {
 
    return (
        <>
        {/* <div id="CurrentScore-layout">
            <CurrentScore />
        </div> */}
        {/* <div id="RoundCounter-layout">
            <RoundCounter />
        </div> */}
        <div id="Legdisplay-layout">
            <Legdisplay />
        </div>
        <div id="Enter-Score">
            <form>
                <input type="number" id="score" placeholder="Enter Round Score Here"></input>
            </form>
        </div>
           
                
            
        </>
    )
}

export default Game;