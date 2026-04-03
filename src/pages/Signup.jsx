import React from 'react'
import Header from '../components/Header'
import '../App.css'
import AuthComponent from '../components/Auth'

function Signup() {
  return (
    <div>
      <Header/>
      <div className='wrapper'>
        <AuthComponent />
      </div>
    </div>
  )
}

export default Signup