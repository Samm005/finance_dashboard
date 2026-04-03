import React from 'react'
import './Header.css'

function Header() {

  function handleLogout() {
    alert('Logged out');
  }


  return (
    <div className='navbar'>
      <p className='logo'>WealthTrack</p>
      <p className='logo link' onClick={handleLogout}>Logout</p>
    </div>
  )
}

export default Header