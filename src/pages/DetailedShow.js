import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

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
  useEffect(() => {
    console.log('new data=', data)
    console.log(data.genres)
  }, [data])
  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (<div>
        <img src={data.image ? data.image.medium : require('../assets/not-found.jpeg')} alt='show-img'></img>
        <div>
          <h1>{data.name}</h1>
          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: data.summary }}
          />
          <p>Language : {data.language}</p>
          <p>Status : {data.status}</p>
          <p>Average Runtime : {data.averageRuntime} mins</p>
          <p>Premiered : {data.premiered}</p>
          <p>Genre : {data.genres ? data.genres.map((i, ind) => {
            return <span key={ind}>{i}</span>
          }) : "N/A"}</p>
        </div>
      </div>)}
    </div>
  )
}
