import React from 'react';
import wave from '../../images/wave.png'
const Greeting = () => {

    return (
        <div id="greeting">
            <div class="container content">       
                <h1>WELCOME TO DARTSHUB</h1>
                <h3>A free, online, multiplayer darts match app</h3>
                <p>No fees, no fuss. Just register and account and play instantly!</p>
            </div>
            <img className="greeting-wave" src={wave} alt="white wave"></img>
        </div>
    )
}
export default Greeting;