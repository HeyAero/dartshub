import React from 'react';
import { Link } from 'react-router-dom';

const JoinGame = () => {

    const [code, setCode] = React.useState("");

    function handleCodeChange(e) {
        setCode(e.target.value);
    }


    return (
        <>
            <form role="form" id="Join-game">
                <h1>Join a Game Here!</h1>
                <h4>Just Enter The Room Code Below:</h4>
                <label  for="Join-Room" > Your Room Code: </label>
                <input type="text" id="Join-Room" onChange={handleCodeChange} value={code}/><br></br>
                <Link to={{
                    pathname: "/game",
                    state: {code: code, creator:false}
                }}>Submit</Link>
            </form>
        </>
    )
}

export default JoinGame;