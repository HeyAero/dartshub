import React from 'react'
import { HomeIcon, ExitToAppIcon, GroupAddIcon, PageviewIcon, SupervisorAccountIcon, StorageIcon, PersonIcon, MenuBookIcon} from '@material-ui/icons';



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