import React from 'react';
import { Navbar, Greeting, UserStories} from '../../components'

const Home = () => {
 
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Greeting />
            <UserStories />
        </>
    )
}

export default Home;