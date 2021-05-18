import React from 'react';

const JoinGame = () => {
    return (
        <>
            <form>
                <label for="Join-Room"> Enter Room-Code: </label>
                <input type= "text" id="Join-Room"/>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}

export default JoinGame;