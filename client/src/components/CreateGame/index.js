import React from 'react';

const CreateGame = () => {
    return (
        <>
            <form id="Create-Game">
                <h1>Create a Game Here!</h1>
                <h4>Fill in the details below to get started</h4>
                <label for="Create-Room"> Enter Room-Code: </label>
                <input type= "text" id="Create-Room"/><br></br>
                <label for="Settings"> Number of Legs: </label>
                <input type= "text" id="Settings"/><br></br>
                <input type="submit" value="Submit" id="submit-btn"/>
            </form>
        </>
    )
}

export default CreateGame;
