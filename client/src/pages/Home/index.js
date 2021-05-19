import React from 'react';
import { Navbar, Greeting, UserStories, HowTo} from '../../components'

const Home = () => {
 
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Greeting />
            <UserStories />
            <HowTo />
        </>
    )
}

export default Home;