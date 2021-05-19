import React from 'react';
import Modal from 'react-modal';
// import { getAuthInstance } from "../../actions"
import  { Redirect } from 'react-router-dom'

const LeaderboardNav = () =>{
    const [openLogin, setOpenLogin] = React.useState(false); 
    const [openSignUp, setOpenSignUp] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);

    const [username, setUsername] = React.useState(""); 
    const [password, setPassword] = React.useState(""); 
    const [email, setEmail] = React.useState("");
    
    const [errors, setErrors] =  React.useState();

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            const response = await getAuthInstance.post('/users/token/obtain/', {
                username: username,
                password: password
            })
            getAuthInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            setRedirect(true);
        } catch (error) {
            throw error;
        }
    }

    async function handleRegistrationSubmit(e) {
        e.preventDefault();
        try {
            const response = await getAuthInstance.post('/users/create/', {
                username: username,
                email: email,
                password: password
            })
            return response;
        } catch (error) {
            console.log(error.stack)
            setErrors(error.response.data)
        }
    }

    function openModal() {
        setOpenSignUp(true);
    }
    function openModalLogin() {
        setOpenLogin(true)
    }

    function closeModal(){
        setOpenSignUp(false);
        setUsername("");
        setPassword("");
        setEmail("");
    }
    function closeModalLogin() {
        setOpenLogin(false);
        setUsername("");
        setPassword("");
    }

        return (

            <>
                <header className="header">
                    <div className="nav-container">
                        <nav className="navbar">
                           
                            <div className="navbar-collapse" id="navbarMain">
                               
                                   
                                        <a href='/'>Home</a>
                                
                                   
                                        <button className="button" id="signup" onClick={openModal}>Sign Up</button>
                                
                                   
                                        <button className="button" id="login" onClick={openModalLogin}>Login</button>
                                
                            </div>
                        </nav>
                    </div>
                </header>
                <Modal isOpen={openSignUp}
                    onRequestClose={closeModal}
                   
                >
                    <div className="modal-body">
                        <button onClick={closeModal}>X</button>
                        <h2>Get Started Here!</h2>
                        <span className="subtitle">Please enter your information bellow...</span>
                        <form className="Register-form" noValidate="novalidate" onSubmit={handleRegistrationSubmit}>
                            <div className="form-group">
                                <label for="username">Enter Your Username: </label>
                                <input className="form-control" type="text" name="username" placeholder="Enter Your Username Here..." required="" autoComplete="off" aria-required="true" value={username} onChange={handleUsernameChange}/>
                            </div>
                            <div className="form-group">
                                <label for="email">Enter Your Email: </label>
                                <input className="form-control" type="email" name="email" placeholder="Enter Your Email Here..." required="" autoComplete="off" aria-required="true" value={email} onChange={handleEmailChange}/>
                            </div>
                            <div className="form-group">
                                <label for="pass">Enter Your Password: </label>
                                <input className="form-control" type="password" name="pass" placeholder="Enter Your Password Here..." required="" autoComplete="off" aria-required="true"  value={password} onChange={handlePasswordChange}/>
                            </div>
                            <div className="form-group">
                                <label for="confirm-pass">Confirm Your Password: </label>
                                <input className="form-control" type="password" name="confirm-pass" placeholder="Confirm Your Password Here..." required="" autoComplete="off" aria-required="true" />
                            </div>
                            <div className="button">
                                <button id="signup_btn" type="submit" value="Sign Up">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    
                </Modal>
                <Modal
                    isOpen={openLogin}
                    onRequestClose={closeModalLogin}
                    >
                
                    <div className="modal-body">
                     <button onClick={closeModalLogin}>X</button>
                        <h2>Login To Get Started</h2>
                        <span className="subtitle">Enter Your Details Below</span>
                        <form className="Login-Form" noValidate="novalidate" onSubmit={handleLoginSubmit}>
                            <div className="form-group">
                            <label for="username">Enter Your username: </label>
                                <input className="form-control" type="text" name="username" placeholder="Enter Your Username Here..." required="" autoComplete="off" aria-required="true" value={username} onChange={handleUsernameChange} />Username:
                            </div>
                            <div className="form-group">
                            <label for="pass">Enter Your Password: </label>
                                <input className="form-control" type="password" name="pass"  placeholder="Password" required="" autoComplete="off" aria-required="true" value={password} onChange={handlePasswordChange} /> Password: 
                            </div>
                            <div className="button">
                                <button id="login_btn" type="submit" value="Sign Up">Log In</button>
                            </div>
                        </form>
                    </div>
                </Modal>

                { redirect ? <Redirect to='/user'/> : <></>}
            </>
        )
    }


   


export default LeaderboardNav;

