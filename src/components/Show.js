import React from 'react'
import { Link } from 'react-router-dom'


export default function Show({ data }) {
  const summaryText = data.summary ? `${data.summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')}...` : "N/A"
  return (
    <div className='show-wrapper' style={{ width: '275px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', background: '#8696FE', margin: '20px', padding: '15px 0px', borderRadius: '20px', }}>
      <div className='img-wrapper'>
        <Link to={`/show/${data.id}`}>
          <img src={data.image ? data.image.medium : require('../assets/not-found.jpeg')} alt='show' className='rounded-img'></img>
        </Link>
      </div>
      <h1 style={{ maxWidth: "90%" }}>{data.name}</h1>
      <p style={{ maxWidth: "90%", padding: '10px 0px' }}>{summaryText}</p>
      <p style={{ marginBottom: "10px" }}>Rating: <b>{data.rating.average ? data.rating.average : "N/A"}</b></p>
      <button style={{ fontSize: '1.25rem', padding: '10px', borderRadius: '10px', background: '#984df7' }}><Link style={{ color: 'white' }} to={`/show/${data.id}`}>See More</Link></button>
    </div>
  )
}
