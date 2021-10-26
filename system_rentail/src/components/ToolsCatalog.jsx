import React, { useState, useEffect } from 'react';
import BasicSelect from './BasicSelect'
import RangePrice from './RangePrice'
import '../styles/bar_tools.sass';


export default function ToolsCatalog(props) {

    return (
        <div className="toolsCatalog">
            <BasicSelect search="sector" searchPublications={props.searchPublications} url='https://income-system.herokuapp.com/sectors' title='Sector'/>
            <BasicSelect search="category" searchPublications={props.searchPublications} url='https://income-system.herokuapp.com/categories' title='Categoria'/>
            <RangePrice search={['min_price','max_price']} searchPublications={props.searchPublications} url='https://income-system.herokuapp.com/categories'/>
        </div>
    )
}