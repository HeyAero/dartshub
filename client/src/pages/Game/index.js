import React from 'react';
import { CurrentScore, Legdisplay, OpponentScore } from '../../components'
const Game = () => {

    return (
        <>
            <div className="Game-layout">
                <div id="CurrentScore-layout">
                    <CurrentScore />
                </div>
                <div id="OpponentScore-layout">
                    <OpponentScore />
                </div>

                <div id="Legdisplay-layout">
                    <Legdisplay />
                </div>
                <div id="Enter-Score">
                    <form>
                        <input type="number" id="score" placeholder="Enter Round Score Here"></input>
                    </form>
                </div>

            </div>




        </>
    )
}

export default Game;