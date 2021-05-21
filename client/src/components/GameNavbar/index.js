import React from 'react';
import Modal from 'react-modal';

const GameNavbar = () => {
    const [openLogout, setOpenLogout] = React.useState(false);
    function openModalLogout() {
        setOpenLogout(true)
    }
    function closeModalLogout() {
        setOpenLogout(false)
    }

    return (
        <>
            <header >
                <div className="nav-container">
                    <nav className="navbar">

                        <div id="GameNav">


                            <a className="Home-nav" href='/'>Home</a>


                            <button className="log" id="logout" onClick={openModalLogout} >Leave Game</button>


                        </div>
                    </nav>
                </div>
            </header>
            <Modal 
                id="logout-modal" isOpen={openLogout}
                onRequestClose={closeModalLogout}>
                <div className="confirm">
                    <form id="logout-form" >
                        <h4>Leave Game</h4>
                        <p>Are you sure you want to leave the game?</p>

                        <a href="/">Leave</a>


                        <button onClick={closeModalLogout}>Cancel</button>
                    </form>
                </div>
            </Modal>

        </>
    )
}

export default GameNavbar;