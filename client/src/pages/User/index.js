import React from 'react';
import { Sidenav, UserInformation, StatInformation } from '../../components'
import { getAuthInstance } from "../../actions"

const User = () => {

    const [username, setUsername] = React.useState(""); 
    const [email, setEmail] = React.useState(""); 

    React.useEffect(() => {
        async function getUserInformation() {
            try {
                const response = await getAuthInstance.get('/users/')
                setUsername(response.data.username);
                setEmail(response.data.email);
            } catch (error) {
                throw error;
            }
        }
        getUserInformation()
    }, [])

    return (
        <>
            <div className="User-page">
                <div id="Sidenav-layout">
                    <Sidenav />
                </div>
                <div id="UserInformation-layout">
                    <UserInformation username={username} email={email} />
                </div>
                <div id="StatInformation-layout">
                    <StatInformation />
                </div>

            </div>



        </>
    )
}

export default User;