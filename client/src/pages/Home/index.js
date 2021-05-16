import React from 'react';
import { Navbar, Greeting } from '../../components'

const Home = () => {
 
    return (
        <>
            <header>
                <Navbar />
            </header>
            <body>
                <Greeting />
            </body>
        </>
    )
}

export default Home;