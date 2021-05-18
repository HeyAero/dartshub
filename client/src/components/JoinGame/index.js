import React from 'react';

const JoinGame = () => {
    return (
        <>
            <form id="Join-game">
                <h1>Join a Game Here!</h1>
                <h4>Just Enter The Room Code Below:</h4>
                <label for="Join-Room" id="Join-Room"> Your Room Code: </label>
                <input type="text"/><br></br>
                <input type="submit" value="Submit" id="submit-btn"/>
            </form>
        </>
    )
}

export default JoinGame;