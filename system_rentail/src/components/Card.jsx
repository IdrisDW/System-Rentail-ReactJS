import React from 'react';
import '../styles/card.sass';
import { ButtonRent } from './Buttons'
 
export function Card(props) {

    return (
    <div className="card">
        <div className="box-image">
            <img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00880609852697l.jpg" alt="" />
        </div>
            <div className="card-content">
            <h2 className="card-title">Lavadora LG 22 kg Silver Deluxe</h2>
            <h4 className="card-name">Lavadora LG</h4>
            <h3 className="card-price">$500</h3>
            <h4 className="card-period">por un periodo de 7 días</h4>
            </div>
            <div className="card-actions">
            <ButtonRent />
            <a href="">Ver mas Opciones</a>
        </div>
    </div>
    )
}