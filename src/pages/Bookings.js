import React, { useState } from 'react'

export default function Bookings() {
  const getLocalMovies = () => {
    let m = localStorage.getItem('movies')
    if (m) return JSON.parse(m)
    return []
  }
  const [movies, setMovies] = useState(getLocalMovies);
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '5vh' }}>
      <table>
        <thead>
          <tr>
            <th>Movie</th>
            <th>Name</th>
            <th>Email</th>
            <th>Tickets</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => {
            return <tr>
              <td>{movie.movie}</td>
              <td>{movie.name}</td>
              <td>{movie.email}</td>
              <td>{movie.tickets}</td>
              <td>{movie.date}</td>
              <td>{movie.time}</td>
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}
