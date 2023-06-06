import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";

export default function DetailedShow() {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(data => data.json())
      .then(d => setData(d))
      .then(setLoading(false))
  }, [])
  return (
    <div style={{ margin: "25px" }}>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) :
        (<div className='detail-container'>
          <div className='detail-img'>
            <img style={{ height: '500px', maxWidth: '85vw' }} src={data.image ? data.image.original : require('../assets/not-found.jpeg')} alt='show-img'></img>
            <button style={{ padding: ' 10px', borderRadius: '10px', background: '#76f150', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '35px' }}><Link to={`/form/${id}`} style={{ width: "100%" }}>Book Tickets</Link></button>
          </div>
          <div className='detail-text'>
            <h1>{data.name}</h1>
            <div
              className="summary"
              dangerouslySetInnerHTML={{ __html: data.summary }}
            />
            <p><b>Language</b> : {data.language ? data.language : "N/A"}</p>
            <p><b>Status</b> : {data.status ? data.status : "N/A"}</p>
            <p><b>Average Runtime</b> : {data.averageRuntime ? data.averageRuntime : "N/A"} mins</p>
            <p><b>Premiered</b> : {data.premiered ? data.premiered : "N/A"}</p>
            <p><b>Genre</b> : {data.genres ? data.genres.map((i, ind) => {
              return <span className='genre' key={ind}>{i}</span>
            }) : "N/A"}</p>
          </div>
        </div>)}
    </div>
  )
}
