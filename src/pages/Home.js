import React, { useState, useEffect } from 'react'
import Show from '../components/Show'
import Search from '../components/Search'

export default function Home() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(data => data.json())
            .then(d => setData(d))
    }, [])
    return (
        <div className='home'>
            <Search />
            <div>
                <h2>Some of Our shows</h2>
                <hr />
                <div className='show-container'>
                    {data.map(i => {
                        return <Show data={i.show} key={i.show.id} />
                    })}
                </div>
            </div>
        </div>
    )
}
