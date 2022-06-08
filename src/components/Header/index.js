import React from 'react'
import {
    AiOutlineSearch,
    AiFillHome
} from 'react-icons/ai'
import {
    RiMessengerLine
} from 'react-icons/ri'
import {
    BsPlusSquare
} from 'react-icons/bs'
import {
    MdOutlineExplore
} from 'react-icons/md'
import {
    FiHeart
} from 'react-icons/fi'
import './style.css'

import {
    IconContext
} from 'react-icons'

export function Header() {

    return ( <
        header className = "header" >

        <
        div className = "container" >

        <
        img className = "logo"
        src = "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" / >

        <
        div className = "input-fake" >
        <
        IconContext.Provider value = {
            {
                color: '#8e8e8e'
            }
        } >
        <
        AiOutlineSearch / >
        <
        /IconContext.Provider>

        <
        input placeholder = "pesquisar" / >
        <
        /div>

        <
        div className = "menu-icons" >
        <
        IconContext.Provider value = {
            {
                size: '26px'
            }
        } >
        <
        div >
        <
        AiFillHome / >
        <
        /div>


        <
        div >
        <
        RiMessengerLine / >
        <
        /div>

        <
        div >
        <
        BsPlusSquare / >
        <
        /div>

        <
        div >
        <
        MdOutlineExplore / >
        <
        /div>

        <
        div >
        <
        FiHeart / >
        <
        /div>


        <
        /IconContext.Provider> <
        img className = "img-user"
        src = "https://media-exp1.licdn.com/dms/image/D4D35AQHk_4FZ4lgH2A/profile-framedphoto-shrink_200_200/0/1648494274632?e=1655326800&v=beta&t=iSiXnBt4j8uBE041IC7LazaPIF6Z4dbLnVuYxnu7r3Q" / >
        <
        /div>

        <
        /div>

        <
        /header>
    )

}