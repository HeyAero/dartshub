import React from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PageviewIcon from '@material-ui/icons/Pageview';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import StorageIcon from '@material-ui/icons/Storage';
import PersonIcon from '@material-ui/icons/Person';
import {JoinGame} from '../JoinGame';
import {CreateGame} from '../CreateGame'




export const SidenavData = [
    {
        title: "User Profile",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "Create A Game",
        icon: <GroupAddIcon />,
        link: "/home"
    },
    {
        title: "Search For A Game",
        icon: <PageviewIcon />,
        link: "/home"
    },
    {
        title: "Single Player",
        icon: <PersonIcon />,
        link: "/home"
    },
    {
        title: "View The Lobby",
        icon: <SupervisorAccountIcon />,
        link: "/home"
    },
    {
        title: "Leaderboard",
        icon: <StorageIcon />,
        link: "/leaderboard"
    },
    {
        title: "How To Play",
        icon: <MenuBookIcon />,
        link: "/home"
    },
    {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/home"
    },

]