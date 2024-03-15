import React, { useSyncExternalStore } from 'react'
import imgRock from '../asses/iconRockAndStore-removebg-preview.png'
import { useState, useEffect } from 'react'

function CheckIn() {
const [newUser, setNewUser] = useState({name: "", email: "", password: "", telephone: "", birthday: "", interes: ""})

const handleChange = (event) => {
    const { name, value } = event.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

//   test
useEffect(() => {
console.log(newUser)
}, [newUser])


  return (
    
<form className='checkIn-container'>
<h1>Here you can register</h1>
<img src={imgRock}></img>
<h2>Good luck</h2>


<input onChange={handleChange} name='name' type='text' placeholder='name'></input>
<input onChange={handleChange} type='text' name='email' placeholder='email'></input>
<input onChange={handleChange} type='text' name='password' placeholder='password'></input>
<input onChange={handleChange} type='text' name='confirmpassword' placeholder='confirm password'></input>
<input onChange={handleChange} type='text' name='telephone' placeholder='number of telephon'></input>
<input onChange={handleChange} type='text' name='birthday' placeholder='birthday'></input>
<textarea onChange={handleChange} placeholder='interes' name='interes'></textarea>
</form>
  )
}

export default CheckIn