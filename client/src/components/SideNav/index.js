import React from "react";
import { SidenavData } from './SidenavData'


const Sidenav = () => {
    return (
        <>
            <div className="Sidebar">
                <ul className="SidebarList">
                    {SidenavData.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                onClick={() => {
                                    window.location.pathname = val.link
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
