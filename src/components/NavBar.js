import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'
import Bookings from '../pages/Bookings'

export default function NavBar() {
  return (
    <div style={{
        display: "flex",
        background: 'black',
        justifyContent:'space-between',
        padding: '5px 25px',
        fontSize: '20px'
    }}>
        <div style={{ margin: '10px' }}>
            <NavLink to="/" style={({ isActive }) => ({ 
                color: isActive ? 'greenyellow' : 'white' })}>
                ShowBookerz
            </NavLink>
        </div>
        <div style={{ margin: '10px' }}>
            <NavLink to="/booking" style={({ isActive }) => ({ 
                color: isActive ? 'greenyellow' : 'white' })}>
                Bookings
            </NavLink>
        </div>
    </div>
  )
}
