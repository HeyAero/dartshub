import React from 'react';
import { Sidenav, UserInformation, StatInformation } from '../../components'

const User = () => {

    return (
        <>
            <div className="User-page">
                <div id="Sidenav-layout">
                    <Sidenav />
                </div>
                <div id="UserInformation-layout">
                    <UserInformation />
                </div>
                <div id="StatInformation-layout">
                    <StatInformation />
                </div>

            </div>



        </>
    )
}

export default User;