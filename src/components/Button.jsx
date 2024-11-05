import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../themes/ThemeContext'

export default function Button() {
  const { light, changeTheme } = useTheme()
  
  return (
    <>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/myJob'>My Job</Link>
            <Link to='/profile'>Profile</Link>
        </nav>
            <button onClick={changeTheme}>{light ? 'Modo oscuro' : 'Modo Claro'}</button> 
        <Outlet />
    </>
  )
}
