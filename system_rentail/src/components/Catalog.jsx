import React from 'react';
import '../styles/catalog.sass'
import { Card } from './Card'

export default function Catalog(props) {

    return (
        <main className="body-catalog">
            <div className="catalog">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            </div>
        </main>
    )

}