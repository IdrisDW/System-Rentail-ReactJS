import React, { useState, useEffect } from 'react';
import '../styles/loader.sass'

export default function Loading(props){
    return (
    <div className="loading">
        <h4>Loading....</h4>
        <div class="preloader">
        </div>
    </div>
    )
}