import React from 'react';
import { Navbar, Greeting } from '../../components'

const Home = () => {
 
    return (
        <>
            <header>
                <Navbar />
            </header>
            
            <Greeting />
            
        </>
    )
}

export default Home;