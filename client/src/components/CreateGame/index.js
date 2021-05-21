import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../../pages'

const CreateGame = () => {

    const [code, setCode] = React.useState("");
    const [legs, setLegs] = React.useState(1);

    function handleCodeChange(e) {
        setCode(e.target.value);
    }

    function handleLegsChange(e) {
        setLegs(e.target.value);
    }

    return (
        <form id="Create-Game">
            <h1>Create a Game Here!</h1>
            <h4>Fill in the details below to get started</h4>
            <label for="Create-Room"> Enter Room-Code: </label>
            <input type= "text" id="Create-Room" onChange={handleCodeChange} value={code}/><br></br>
            <label for="Settings"> Number of Legs: </label>
            <input type= "text" id="Settings" onChange={handleLegsChange} value={legs}/><br></br>
            <Link to={{
                pathname: "/game",
                state: {code: code, legs: legs, creator:true}
            }} className="submit-button">Submit</Link>
        </form>
    )
}

export default CreateGame;
