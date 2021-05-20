import React from 'react';
import { Navbar, Greeting, UserStories} from '../../components'

const Home = () => {

    return (
        <div id="home">
            <header>
                <Navbar />
            </header>
            <div id="home-content">
                <Greeting />
                <UserStories />
            </div>
        </div>
    )
}

export default Home;