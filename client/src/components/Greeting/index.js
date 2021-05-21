import React from 'react';
import wave from '../../images/wave.png'
import board from '../../images/board.png'
const Greeting = () => {

    return (
        <div id="greeting">
            <div class="container content">    
                <div class="row">
                    <div className="col align-self-center">
                        <h1>WELCOME TO DARTSHUB</h1>
                        <h3>A free, online, multiplayer darts match app</h3>
                        <p>No fees, no fuss. Just register an account and play instantly!</p>
                    </div>
                    <div className="col d-none d-sm-block">
                        <img className="greeting-board" src={board} alt="a virtual dart board"></img>
                    </div>
                </div>
            </div>
            <img className="greeting-wave" src={wave} alt="white wave"></img>
        </div>
    )
}
export default Greeting;