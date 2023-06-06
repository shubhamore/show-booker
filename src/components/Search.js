import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Search() {
    const [name, setName] = useState("")
    return (
        <header>
            <h1>Welcome to ShowBookerz</h1>
            <h2>Book any Show at any Time.</h2>
            <input type='text' placeholder='Enter Show Name' value={name} onChange={e => setName(e.target.value)} />
            <button><Link style={{ color: 'white' }} to={`/search/shows?q=${name}`}> Find </Link></button>
        </header>
    )
}
