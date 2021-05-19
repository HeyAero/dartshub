import React from 'react';
import { Navbar, Greeting, UserStories } from '../../components'

const Home = () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <div id="Greeting-layout">
                <Greeting />
            </div>
            <div id="UserStories-layout">
                <UserStories />
            </div>

        </>
    )
}

export default Home;