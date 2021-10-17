import React from 'react';
import '../styles/login.sass';
import { ButtonRegister, ButtonLogin } from './Buttons'


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
                <div className="form">
                    <label>Usuario</label>
                    <input type="text" placeholder="Name"></input><br></br>
                    <label>Contraseña</label>
                    <input type="password" placeholder="Contraseña"></input><br></br>
                    <ButtonLogin type="submit"/>
                </div>
                <a href="#">Olvidé mi contraseña</a><br></br>
                <ButtonRegister/>

            </div>
        </div>

    )
}