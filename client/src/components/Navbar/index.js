import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sign: false,
            login: false,
        }
    }
    onOpenModal = () => {
        this.setState({ sign: true });
    };
    onOpenModalLogin = () => {
        this.setState({ login: true});
    };
    onCloseModal = () => {
        this.setState({ sign: false});
    };
    onCloseModalclose = () => {
        this.setState({ login: false})
    }


    render() {
        const { login, sign } = this.state;
        return (

            <>
                <header className="header">
                    <div className="nav-container">
                        <nav className="navbar">
                            <div className="navbar-toggle" data-toggle="collapse" data-target="#navbarMain">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="navbar-collapse" id="navbarMain">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href='#'>Leaderboard</a>
                                    </li>
                                    <li>
                                        <button className="button" id="signup" onClick={this.onOpenModal}>Sign Up</button>
                                    </li>
                                    <li>
                                        <button className="button" id="login" onClick={this.onOpenModalLogin}>Login</button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
                <Modal open={sign} onClose={this.onCloseModal}>
                    <div className="modal-body">
                        <h2>Get Started Here!</h2>
                        <span className="subtitle">Please enter your information bellow...</span>
                        <form className="Register-form" noValidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="username" id="username" placeholder="Enter Your Username Here..." required="" autocomplete="off" aria-required="true" ></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Enter Your Email Here..." required="" autoComplete="off" aria-required="true"></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="pass" placeholder="Enter Your Password Here..." required="" autoComplete="off" aria-required="true"></input>
                            </div>
                            <div className="button" id="signup_btn" type="button" value="Sign Up"/>
                        </form>
                    </div>
                </Modal>
                <Modal open={login} onClose={this.onCloseModalclose}>
                
                    <div className="modal-body">
                        <h2>Login To Get Started</h2>
                        <span className="subtitle">Enter Your Details Below</span>
                        <form className="Login-Form" novalidate="novalidate">
                            <div className="form-group">
                                <input className="form-control" type="text" name="username" placeholder="Enter Your Username Here..." required="" autocomplete="off" aria-required="true" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="pass"  placeholder="Password" required="" autocomplete="off" aria-required="true" />
                            </div>
                            <input className="buton" id="login_btn" type="button" value="Login" />
                        </form>
                    </div>
                </Modal>
            </>
        )
    }
}


export default Navbar;