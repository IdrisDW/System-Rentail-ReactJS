import React, { useState, useEffect } from 'react';
import { ButtonSearch, ButtonFilter } from './Buttons'

export default function ToolsCatalog(props) {

    return (
        <div className="toolsCatalog">
            <div className='bar-search'>
                <form action="submit" method="get" onSubmit={(e) => {
                    e.preventDefault();
                    const search = `https://income-system.herokuapp.com/publications?title=${e.target[0].value}` 
                    props.searchPublications(search)
                }}>
                    <input type="text" />
                    <ButtonSearch />
                </form>
                <form action="submit" method="get" onSubmit={(e) => {
                    e.preventDefault();
                    const search = `https://income-system.herokuapp.com/publications?location=${e.target[0].value}` 
                    props.searchPublications(search)
                }}>
                    <input type="text" />
                    <ButtonFilter />
                </form>
                <form action="submit" method="get" onSubmit={(e) => {
                    e.preventDefault();
                    const search = `https://income-system.herokuapp.com/publications?min_price=${e.target[0].value}&max_price=${e.target[1].value}` 
                    props.searchPublications(search)
                }}>
                                        <input type="number" />
                    <input type="number" />
                    <ButtonFilter />
                </form>
            </div>
        </div>
    )
}