import React from "react";

const UserInformation = () => {
    return (
        <>
            <div className="UserInfo-layout">
                <h1>User Information</h1>
                <h4> Hey User, some of your account details are below...</h4>
                <div id="user-info">
                    <table>
                        <tbody>
                            <tr>
                                <td id="Uname">Username: </td>
                                <td>Their username</td>
                            </tr>
                            <tr>
                                <td id="Email">Email Address: </td>
                                <td>Their email address</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


        </>
    )

}

export default UserInformation;