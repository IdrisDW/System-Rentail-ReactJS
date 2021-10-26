import React, { useState, useEffect } from 'react';
import { ButtonSearch, ButtonFilter } from './Buttons'
import '../styles/bar_tools.sass';
const input_search = document.getElementById('search')
const select_categories = document.getElementById('2')
const select_sectors = document.getElementById('1')
const min_price = document.getElementById('min_price')
const max_price = document.getElementById('max_price')


export default function ToolsCatalog(props) {

    const [ searchCurrent, setSearchCurrent ] = useState("Publicaciones")
    const [ optionsSectors, setOptionsSectors ] = useState([]);
    const [ optionsCategories, setOptionsCategories ] = useState([]);

    useEffect(() => {
        const getSectors = async (url) => {
            const requestSectors = await fetch(url)
            const jsonRequestSectors = await requestSectors.json()
            setOptionsSectors(jsonRequestSectors)
        }

        const getCaregories = async (url) => {
            const requestCategories = await fetch(url)
            const jsonRequestCategories = await requestCategories.json()
            setOptionsCategories(jsonRequestCategories)
        }

        getSectors('https://income-system.herokuapp.com/sectors')
        getCaregories('https://income-system.herokuapp.com/categories')

    },[])

    return (
        <div className="toolsCatalog">
            <div key="bar-search" className='bar-search'>
                <div className="breadcrumbs">
                    <a href="#">Home /</a>
                    <a href="#">{searchCurrent}</a>
                </div>
                <form action="submit" method="get" onSubmit={(e) => {
                    e.preventDefault();
                    const search = `https://income-system.herokuapp.com/publications?title=${e.target[0].value}` 
                    props.searchPublications(search)
                    // input_search.value = ""
                    // select_sectors.value = ""
                    // select_categories.value = ""
                    }}>
                    <input id="search" type="text" />
                    <ButtonSearch key="search"/>
                </form>
            </div>
            <div key="filters" className="filters">
                <form action="submit" method="get" onSubmit={(e) => {
                        e.preventDefault();
                    const search = `https://income-system.herokuapp.com/publications?sector=${e.target[0].value}` 
                    props.searchPublications(search)
                    // select_sectors.value = ""
                    }}>
                    <label>Sector:</label>
                    <select name="sectors" id="1">
                        <option value="">Mostrar Todos</option>
                        {optionsSectors.map((s) => <option value={s._id}>{s.name}</option> )}
                    </select>
                    <ButtonFilter key="sectors"/>
                </form>
                <form action="submit" method="get" onSubmit={(e) => {
                        e.preventDefault();
                    const search = `https://income-system.herokuapp.com/publications?category=${e.target[0].value}` 
                    props.searchPublications(search)
                    select_categories.value = ""
                    }}>
                    <label>Categoria:</label>
                    <select name="categories" id="2">
                    <option value="">Mostrar Todas</option>
                        {optionsCategories.map((c) => <option value={c._id}>{c.name}</option> )}
                    </select>
                    <ButtonFilter key="categories"/>
                </form>
                <form className="filter_price" action="submit" method="get" onSubmit={(e) => {
                    e.preventDefault();
                    const search = `https://income-system.herokuapp.com/publications?min_price=${e.target[0].value}&max_price=${e.target[1].value}` 
                    props.searchPublications(search)
                    min_price.value = null
                    max_price.value = null
                    }}>
                    <label>Precio:</label>
                    <input id="min_price" key="min_price" type="number" />
                    <input id="max_price" key="max_price" type="number" />
                    <ButtonFilter key="price"/>
                </form>
            </div>
        </div>
    )
}