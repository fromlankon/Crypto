import "./components/main.css"
import React from 'react'
import BlockFirst from './components/BlockFirst'

import BlockSecond from "./components/BlockSecond"
import BlockThird from "./components/BlockThird"

export default function MainPage() {
    return (
        <div id="body">
            <BlockFirst />
            <BlockSecond />
            <BlockThird />
        </div>

    )
}
