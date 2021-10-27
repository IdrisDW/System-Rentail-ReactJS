import React, { useState, useEffect } from 'react';

import '../styles/header.sass'
import user from '../public/assets/user.png';
import menu from '../public/assets/menu.png';


export function Header(props) {

    const [login, setLogin] = useState(true)

    return (
        <header className="header">
        <div className="login">
        { !login ? <a href="#">Iniciar Sesión</a> : <a href="#">Bienvenido Brann</a> }
        { !login ? <img src={user} alt="user" /> : <img src={menu} alt="menu" /> }  
        </div>
        <div className="title-header">
            <h1>MIS RENTAS</h1>
        </div>
    </header>
    )
}