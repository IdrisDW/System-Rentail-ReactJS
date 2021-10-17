import React, { useState, useEffect } from 'react';
import ToolsCatalog from './ToolsCatalog'

import '../styles/catalog.sass'
import { Card } from './Card'

export default function Catalog(props) {

    const [ publications, setPublications ] = useState([]);

    useEffect(() => {
        const getPublications = async (url) => {
            const request = await fetch(url)
            const jsonRequest = await request.json()

            setPublications(jsonRequest)

        }

        getPublications('https://income-system.herokuapp.com/publications')

    },[])

    const searchPublications = async (url_serach) => {
        const request = await fetch(url_serach)
        const jsonRequest = await request.json()
        setPublications(jsonRequest)
    }

    return (
        <main className="body-catalog">
            <div className="catalog">
                <ToolsCatalog searchPublications={searchPublications}/>
                <ul>
                    {publications.map(publication => {
                        return <li key={publication._id}><Card publication={publication}/></li>
                    })}
                </ul>
                
            </div>
        </main>
    )

}