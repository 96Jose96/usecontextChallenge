import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Button() {
  return (
    <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/myJob'>My Job</Link>
            <Link to='/profile'>Profile</Link>
        </nav>
            <button>Boton</button> 
        <Outlet />
    </>
  )
}
