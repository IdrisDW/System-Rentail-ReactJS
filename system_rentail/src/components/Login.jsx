import React from 'react';
import '../styles/login.sass';
import { ButtonRent } from './Buttons'


export function Login(props){
    return(
        <div className="container">
            <div className="image">
                <center>
                    <img className="image-icon" src={'http://cdn.onlinewebfonts.com/svg/img_453163.png'} alt="login" />
                </center>
            </div>
            <div className="info">
                <h3 className="title">¡Bienvenido!</h3>
            </div>
        </div>

    )
}