import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Search from '../components/Search'
import Show from '../components/Show'

export default function SearchedShow() {
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("q")
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
            .then(data => data.json())
            .then(d => setData(d))
    }, [query])
    return (
        <div style={{ margin: "0 30px" }}>
            <Search />
            <h2>Results for "{query}"</h2>
            <hr />
            <div className='show-container'>
                {data.length > 0 ? data.map(i => {
                    return <Show data={i.show} key={i.show.id} />
                }) : "No results found"}
            </div>
        </div>
    )
}
