import React from 'react';
import '../styles/header.sass'
import user from '../public/assets/user.png';

export function Header(props) {

    return (
        <header className="header">
        <div className="login">
        <a href="">Iniciar sesión</a>
        <img src={user} alt="user" />
        </div>
        <div className="title-header">
            <h1>CATÁLOGO DE PRODUCTOS</h1>
        </div>
    </header>
    )
}