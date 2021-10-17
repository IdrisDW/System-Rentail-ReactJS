import React, { useState, useEffect } from 'react';
import { Table } from './Table'
import '../styles/panel.sass'

export default function RequestPanel(props) {

    return (
        <main className="body-panel">
            <div className="requests-panel">
                <h1>Solicitudes {props.type}</h1> {/* Se pasará como propiedad si son realizadas o recibidas*/}
                <Table type = {props.type}></Table> {/* Especificarle si será una tabla de rec o realizadas */}
            </div>
        </main>
    )

}