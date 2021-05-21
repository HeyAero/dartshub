import React from "react";
import { SidenavData} from './SidenavData'
import { UserCard } from './UserCard'
import {JoinGame} from '../JoinGame'
import Modal from 'react-modal';


const Sidenav = ({showCreateGame, setShowCreateGame, showJoinGame, setShowJoinGame, setShowLobby, showLobby, username}) => {
    // const [open, setOpen] = React.useState(false);
    // function openModal() {
    //     setOpen(true);
    // }
    // function closeModal() {
    //     setOpen(false)
    // }
    
    return (
        <div className="Sidebar">
            <UserCard username={username} />
        
            <ul className="SidebarList">
                {SidenavData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            onClick={() => {
                                if (val.link == "create") {
                                    setShowCreateGame(!showCreateGame)
                                } else if (val.link == "join") {
                                    setShowJoinGame(!showJoinGame)
                                } else if (val.link == "lobby") {
                                    setShowLobby(!showLobby)
                                } else if (val.link == "/") {
                                    setShowLobby(!showLobby)
                                } else if (val.link == "logout") {
                                    localStorage.clear();
                                    window.location.pathname = ""
                                } else {
                                    window.location.pathname = val.link
                                }
                            }}>
                            {" "}
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">
                                {val.title}
                            </div>


                        </li>

                    )
                })}



            </ul>
        </div>
    )
}

export default Sidenav;

