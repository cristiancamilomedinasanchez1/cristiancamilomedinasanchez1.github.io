import React from 'react'
import imgRock from '../asses/iconRockAndStore-removebg-preview.png'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


function SignIn() {
const [captureForm, setCaptureForm] = useState({email: "", password: ""})

// test
useEffect(() => {
console.log(captureForm)
}, [captureForm])


const challengeForm = (e) => {
    setCaptureForm(e.target.value)
}

  return (

<form className='signIn-container'>
    <div>
<h1>Rock And Roll</h1>
<h2>Products and Very Most</h2>
<img src={imgRock} ></img>
</div>

<div>

<input type='text' name='email' placeholder='email' onChange={challengeForm}></input>
<input type='password' placeholder='password' onChange={challengeForm}></input>

<button type='submit'>Log IN</button>
</div>

<div>Are you wanted register? click <NavLink to='/checkIn'>Here</NavLink> </div>

    </form>
  )
}

export default SignIn