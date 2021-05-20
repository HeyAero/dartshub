import React from "react";

const UserInformation = ({username, email}) => {
    return (
        <div className="user-info">
            <h1>User Information</h1>
            <div>
                <h5>Username: {username}</h5>
                <h5>Email Address: {email}</h5>
            </div>
        </div>
    )
}

export default UserInformation;