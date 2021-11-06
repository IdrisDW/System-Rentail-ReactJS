import React, { useState, useEffect } from 'react';
import ToolsCatalog from './ToolsCatalog'
import SimpleBackdrop from './SimpleBackdrop'
import BasicBreadcrumbs from './BasicBreadcrumbs'
import '../styles/catalog.sass'
import { Card } from './Card'

export default function Catalog(props) {

    const [ publications, setPublications ] = useState([]);
    const [ loading, setLoading ] = useState(null);
    const [ notResult, setNotResult ] = useState(null);
    const [ search, setSearch ] = useState(null)

    useEffect(() => {
        const getPublications = async (url) => {
            setLoading(true)
            try {
                const request = await fetch(url)
                const jsonRequest = await request.json()
                if (jsonRequest.length > 0) {
                    setLoading(false)
                    setPublications(jsonRequest)
                    setNotResult(false)
                } else {
                    setNotResult(true)
                }
            } catch (err) {
                setNotResult(true)
            }
        }

        let url = "https://income-system.herokuapp.com/publications"

        if (props.match.params.search) {
            url = url + "?title=" + props.match.params.search
        }

        getPublications(url)

    },[])


    const searchPublications = async (url_search, search) => {
        setLoading(true)
        const request = await fetch(url_search)
        if (request.status === 200) {
            const jsonRequest = await request.json()
                setLoading(false)
                setSearch(search)
                setPublications(jsonRequest)
        } else {
            setSearch(null)
            setLoading(false)
            setPublications([])
        }
    }

    return (
        <>
        <BasicBreadcrumbs search={search} />
        {loading ? <SimpleBackdrop loading={true} />: null}
        <main className="body-catalog">
            <div className="catalog">
                <ToolsCatalog searchPublications={searchPublications} />
                <ul>
                    {publications.length > 0 ? publications.map(publication => {
                            return <li key={publication._id}><Card history={props.history} publication={publication}/></li>
                    }): <h1>Sin Resultados</h1>}
                </ul>
            </div>
        </main>
        </>
    )

}