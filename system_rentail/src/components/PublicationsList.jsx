import React, { useState, useEffect } from 'react';
import { Card } from './Card'

export default function PublicacionesList(props) {
    return (
        <ul>
            {props.publications.map(publication => {
                return <li key={publication._id}><Card publication={publication}/></li>
            })}
        </ul>
    )
}