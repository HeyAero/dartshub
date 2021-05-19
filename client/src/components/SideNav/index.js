import React from "react";
import { SidenavData} from './SidenavData'
import { UserCard } from './UserCard'
import {JoinGame} from '../JoinGame'
import Modal from 'react-modal';


const Sidenav = ({showCreateGame, setShowCreateGame}) => {
    // const [open, setOpen] = React.useState(false);
    // function openModal() {
    //     setOpen(true);
    // }
    // function closeModal() {
    //     setOpen(false)
    // }
    
    return (
        <>
            <div className="Sidebar">
                <UserCard />
            
                <ul className="SidebarList">
                    {SidenavData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                onClick={() => {
                                    if (val.link == "create") {
                                        console.log("TEST")
                                        console.log(showCreateGame)
                                        setShowCreateGame(!showCreateGame)
                                        console.log(showCreateGame)
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
        </>

    )
}

export default Sidenav;
