import React, { useState, useEffect } from 'react';
import BasicBreadcrumbs from './BasicBreadcrumbs'
import ToolsCatalog from './ToolsCatalog'
import PrimarySearchAppBar from './PrimarySearchAppBar'
import SimpleBackdrop from './SimpleBackdrop'
import '../styles/catalog.sass'
import { Card } from './Card'

export default function Catalog(props) {

    const [ publications, setPublications ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ notResult, setNotResult ] = useState(false);
    const [ search, setSearch ] = useState(null)

    useEffect(() => {
        const getPublications = async (url) => {
            setLoading(true)
            const request = await fetch(url)
            const jsonRequest = await request.json()
            if (jsonRequest.length > 0) {
                setLoading(false)
                setPublications(jsonRequest)
            } else {
                setNotResult(true)
            }
        }

        getPublications('https://income-system.herokuapp.com/publications')

    },[])

    const searchPublications = async (url_serach, search) => {
        setLoading(true)
        const request = await fetch(url_serach)
        if (request.status === 200) {
            const jsonRequest = await request.json()
            if (jsonRequest.length > 0) {
                setLoading(false)
                setSearch(search)
                setPublications(jsonRequest)
            } else {
                setSearch(null)
                setLoading(false)
                setPublications([])
                setNotResult(true)
            }
        } else {
            setSearch(null)
            setLoading(false)
            setPublications([])
            setNotResult(true)
        }
    }

    return (
        <main className="body-catalog">
            <div className="catalog">
                {loading ? <SimpleBackdrop loading={true} />: null}
                <PrimarySearchAppBar searchPublications={searchPublications}/>
                <BasicBreadcrumbs search={search} />
                <ToolsCatalog searchPublications={searchPublications} />
                <ul>
                    {publications.map(publication => {
                        return <li key={publication._id}><Card publication={publication}/></li>
                    })}
                </ul>
                {notResult ? <h1>Sin Resultados</h1> :null}
            </div>
        </main>
    )

}