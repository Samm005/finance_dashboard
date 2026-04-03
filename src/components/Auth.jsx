import React from 'react'
import './Auth.css'
import Input from './Input'
import Button from './Button'
import { useState } from 'react'

function AuthComponent() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <div className='signup-wrapper'>
        <h1 className='signup-head'>
            Sign Up on <span>WealthTrack</span>
        </h1>

        <form>
            <Input label='Full Name' state={fullName} setState={setFullName} placeholder='Enter your full name' />
            <Input label='Email' state={email} setState={setEmail} placeholder='Enter your email' />
            <Input label='Password' state={password} setState={setPassword} placeholder='Enter your password' />
            <Input label='Confirm Password' state={confirmPassword} setState={setConfirmPassword} placeholder='Confirm your password' />
           
            <Button text={'Sign Up using Email and Password'} />
            <Button text={'Sign Up using Google'} blue={true} />

        </form>
    </div>
  )
}

export default AuthComponent