import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


export const UserCard = () => {
    return (
        <div className="UserCard">
            <div id="Avatar">
                <AccountCircleIcon style={{ fontSize: 80 }}/>
            </div>
            <div class="container">
                <h4><b>'Username'</b></h4>
                <p>Welcome to Dartshub 'username'!</p>
            </div>

        </div>



    )
}

