import React, { useState, useEffect } from 'react';
import ToolsCatalog from './ToolsCatalog'
import DetailsPublication from './DetailsPublication';
import '../styles/catalog.sass'
import { Card } from './Card'

export default function Catalog(props) {

    const [ catalogActive, setCatalogActive ] = useState(true);
    const [ detailsActive, setDetailsActive ] = useState(false);
    // const [ publications, setPublications ] = useState([]);
    const [ publication, setPublication] = useState({})
    const [ loading, setLoading ] = useState(null);
    const [ notResult, setNotResult ] = useState(null);
    const [ search, setSearch ] = useState(null)

    // useEffect(() => {
    //     const getPublications = async (url) => {
    //         setLoading(true)
    //         const request = await fetch(url)
    //         const jsonRequest = await request.json()
    //         if (jsonRequest.length > 0) {
    //             setLoading(false)
    //             setPublications(jsonRequest)
    //             setNotResult(false)
    //         } else {
    //             setNotResult(true)
    //         }
    //     }

    //     getPublications(props.url)

    // },[])

    // const searchPublications = async (url_search, search) => {
    //     setLoading(true)
    //     const request = await fetch(url_search)
    //     if (request.status === 200) {
    //         const jsonRequest = await request.json()
    //         if (jsonRequest.length > 0) {
    //             setLoading(false)
    //             setSearch(search)
    //             setPublications(jsonRequest)
    //             setNotResult(false)
    //             setCatalogActive(true)
    //             setDetailsActive(false)
    //         } else {
    //             setSearch(null)
    //             setLoading(false)
    //             setPublications([])
    //             setNotResult(true)
    //             setCatalogActive(true)
    //             setDetailsActive(false)
    //         }
    //     } else {
    //         setSearch(null)
    //         setLoading(false)
    //         setPublications([])
    //         setNotResult(true)
    //         setCatalogActive(true)
    //         setDetailsActive(false)
    //     }
    // }

    // const getPublication = async (url_search, search) => {
    //     setLoading(true)
    //     const request = await fetch(url_search)
    //     if (request.status === 200) {
    //         const jsonRequest = await request.json()
    //         if (jsonRequest.length > 0) {
    //             setLoading(false)
    //             setSearch(search)
    //             setPublication(jsonRequest)
    //             setNotResult(false)
    //             setCatalogActive(false)
    //             setDetailsActive(true)
    //         } else {
    //             setSearch(null)
    //             setLoading(false)
    //             setPublications([])
    //             setNotResult(true)
    //             setCatalogActive(true)
    //             setDetailsActive(false)
    //         }
    //     } else {
    //         setSearch(null)
    //         setLoading(false)
    //         setPublications([])
    //         setNotResult(true)
    //         setCatalogActive(true)
    //         setDetailsActive(false)
    //     }
    // }

    // const filterPublications = async (url_search, search) => {
    //     setLoading(true)
    //     const request = await fetch(url_search)
    //     if (request.status === 200) {
    //         const jsonRequest = await request.json()
    //         if (jsonRequest.length > 0) {
    //             setLoading(false)
    //             setSearch(search)
    //             setPublications(jsonRequest)
    //             setNotResult(false)
    //             setCatalogActive(true)
    //             setDetailsActive(false)
    //         } else {
    //             setSearch(null)
    //             setLoading(false)
    //             setPublications([])
    //             setNotResult(true)
    //             setCatalogActive(true)
    //             setDetailsActive(false)
    //         }
    //     } else {
    //         setSearch(null)
    //         setLoading(false)
    //         setPublications([])
    //         setNotResult(true)
    //         setCatalogActive(true)
    //         setDetailsActive(false)
    //     }
    // }

    return (
        <main className="body-catalog">
            <div className="catalog">
                <ToolsCatalog searchPublications={props.searchPublications} />
                <ul>
                    {props.publications.length > 0 ? props.publications.map(publication => {
                        if (catalogActive) {
                            return <li key={publication._id}><Card publication={publication}/></li>
                        }
                    }): <h1>Sin Resultados</h1>}
                </ul>
            </div>
        </main>
    )

}