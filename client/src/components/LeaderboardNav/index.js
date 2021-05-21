import React from 'react';
import Modal from 'react-modal';
// import { getAuthInstance } from "../../actions"
import  { Redirect } from 'react-router-dom'

const LeaderboardNav = () =>{
        return (

            <>
                <header className="header">
                    <div className="nav-container">
                        <nav className="navbar">
                           
                            <div className="navbar-collapse" id="navbarMain">
                               
                                   
                                        <a className="Home-nav"href='/'>Home</a>
                                
                            </div>
                        </nav>
                    </div>
                </header>
            </>
        )
    }


   


export default LeaderboardNav;

