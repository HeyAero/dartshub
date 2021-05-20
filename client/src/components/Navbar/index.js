import React from 'react';
import Modal from 'react-modal';



const Navbar = () =>{
    const [open, setOpen] = React.useState(false); 
    function openModal() {
        setOpen(true);
    }
    function openModalLogin() {
        setOpen(true)
    }

    function closeModal(){
        setOpen(false);
    }
    function closeModalLogin() {
        setOpen(false);
    }

        return (

            <>
                <header className="header">
                    <div className="nav-container">
                        <nav className="navbar">
                           
                            <div className="navbar-collapse" id="navbarMain">
                               
                                   
                                        <a id="leaderboard-nav" href='leaderboard'>Leaderboard</a>
                                
                                   
                                        <button className="button" id="signup" onClick={openModal}>Sign Up</button>
                                
                                   
                                        <button className="button" id="login" onClick={openModalLogin}>Login</button>
                                
                            </div>
                        </nav>
                    </div>
                </header>
                <Modal isOpen={open}
                    onRequestClose={closeModal}
                   
                >
                    <div className="modal-body">
                        <button onClick={closeModal}>X</button>
                        <h2>Get Started Here!</h2>
                        <span className="subtitle">Please enter your information bellow...</span>
                        <form className="Register-form" noValidate="novalidate">
                            <div className="form-group">
                                <label for="username">Enter Your Username: </label>
                                <input className="form-control" type="text" name="username" placeholder="Enter Your Username Here..." required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <label for="email">Enter Your Email: </label>
                                <input className="form-control" type="email" name="email" placeholder="Enter Your Email Here..." required="" autoComplete="off" aria-required="true"/>
                            </div>
                            <div className="form-group">
                                <label for="pass">Enter Your Password: </label>
                                <input className="form-control" type="password" name="pass" placeholder="Enter Your Password Here..." required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <label for="confirm-pass">Confirm Your Password: </label>
                                <input className="form-control" type="password" name="confirm-pass" placeholder="Confirm Your Password Here..." required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="button">
                                <button id="signup_btn" type="button" value="Sign Up">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    
                </Modal>
                <Modal
                    isOpen={open}
                    onRequestClose={closeModalLogin}
                    >
                
                    <div className="modal-body">
                     <button onClick={closeModalLogin}>X</button>
                        <h2>Login To Get Started</h2>
                        <span className="subtitle">Enter Your Details Below</span>
                        <form className="Login-Form" noValidate="novalidate">
                            <div className="form-group">
                            <label for="username">Enter Your username: </label>
                                <input className="form-control" type="text" name="username" placeholder="Enter Your Username Here..." required="" autoComplete="off" aria-required="true" />Username:
                            </div>
                            <div className="form-group">
                            <label for="pass">Enter Your Password: </label>
                                <input className="form-control" type="password" name="pass"  placeholder="Password" required="" autoComplete="off" aria-required="true" /> Password: 
                            </div>
                            <div className="button">
                                <button id="login_btn" type="button" value="Sign Up">Log In</button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </>
        )
    }


   


export default Navbar;
