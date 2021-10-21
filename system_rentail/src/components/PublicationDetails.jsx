import React, { useState, useEffect } from 'react';
import '../styles/publication_details.sass';

export default function PublicationDetails(props){
    return (
        <div className="details">
            <div className="box-image">
                <img src="https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00880609852697l.jpg" alt="" />
            </div>
            <div className="main-details">
                <h2>Lavadora LG 22 kg Silver Deluxe</h2>
                <h4>Nombre de producto: Lavadora LG</h4>
                <div className="options-rent">
                    <p>Opciones de Renta</p>
                    <div action="">
                    <input type="text" value="Por un periodo de 7 dias $250" />
                    <input type="text" value="Por un periodo de 7 dias $250" />
                    <input type="text" value="Por un periodo de 7 dias $250" />
                </div>
                <button>Rentalo Ahora                 $500</button>
                </div>
            </div>
            <div className="product-details">

            </div>
        </div>
    )
}