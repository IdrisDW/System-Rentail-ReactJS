import React from 'react';
import '../styles/card.sass';
import { ButtonRent } from './Buttons'
 
export function Card(props) {

    return (
    <div className="card">
        <div className="box-image">
            <img src={props.publication.product[0].image} alt="Product" />
        </div>
            <div className="card-content">
            <h2 className="card-title">{props.publication.title}</h2>
            <h4 className="card-name">{props.publication.product[0].name}</h4>
            <h4 className="card-name">{props.publication.location}</h4>
            <h3 className="card-price">$ {props.publication.prices[0]}</h3>
            <h4 className="card-period">por un periodo de {props.publication.periods[0]} días</h4>
            </div>
            <div className="card-actions">
            <ButtonRent />
            <a href="">Ver mas Opciones</a>
        </div>
    </div>
    )
}