import React from 'react'
import NavBar from '../components/NavBar'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Card() {
    const[Empty,setEmpty]=useState(false)
    const nav=useNavigate()
    if(!localStorage.getItem('user')){
        nav('/')
    }
  return (
    <div>
        <NavBar/>
        <div className='flex flex-col items-center'>
        <img 
        className='w-80'
        src='https://assets-v2.lottiefiles.com/a/5f52011c-1167-11ee-bb7a-87ae82e79a64/WoZMYyosBw.gif'/>
        <p className='font-bold text-xl'>Your Amazon Cart is empty</p>
        <p className='text-md'>Echo... Echo...</p>
        <p className='text-green-900'>Shop today's deals</p>
        </div>
    </div>
  )
}

export default Card