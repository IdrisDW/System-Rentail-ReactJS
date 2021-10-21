import React, { useState, useEffect } from 'react';
import ToolsCatalog from './ToolsCatalog'
import Loading from './Loanding';
import PublicationsList from './PublicationsList'
import PublicationDetails from './PublicationDetails';
import '../styles/catalog.sass'

export default function Catalog(props) {

    const [ loading, setLoading] = useState(true)
    const [ publications, setPublications ] = useState([])
    const [ publication, setPublication] = useState(null)

    useEffect(() => {
        const getPublications = async (url) => {
            const request = await fetch(url)
            const publication = await request.json()
            setPublications(publication)
            setLoading(false)
        }

        getPublications('https://income-system.herokuapp.com/publications/614cdfe151de9100162a0c08')

    },[])

    const searchPublications = async (url_serach) => {
        setLoading(true)
        const request = await fetch(url_serach)
        const publication = await request.json()
        console.log(publication);
        setPublications(publication)
        setLoading(false)
    }

    return (
        <main className="body-catalog">
            <div className="catalog">
                <ToolsCatalog searchPublications={searchPublications}/>
                {/* {!loading ? <PublicationsList publications={publications}/> : <Loading />} */}
                {!loading ? <PublicationDetails /> : <Loading />}
            </div>
        </main>
    )
}