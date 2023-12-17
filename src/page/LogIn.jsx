import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function LogIn() {
    const[username,setusername]=useState('')
    const[password,setPassword] = useState('')
    const [Email, setEmail]=useState('')
    const nav=useNavigate()
    const handelLogIn=()=>{
        if(username==='' || password===""|| Email===""){
            alert("information is Empty")
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)){
            alert("Email is not true")
        }
        else{
        axios.post('https://fakestoreapi.com/auth/login',{
            username:'mor_2314',
            password:'83r5^_'
        })
        .then((res)=>{
            console.log(res);
            localStorage.setItem('user','mor_2314')
            nav('/Home');
        })
    }
}
  return (
    <div className='flex flex-col items-center'>
        <img 
        className='w-32 m-8'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png'/>
        <section class="max-w-4xl p-8 mx-auto bg-white border">
    <h2 class="text-lg font-semibold capitaliz">Account settings</h2>

    <form>
        <div class="flex flex-col">
            <div>
                <label for="username">Username</label>
                <input 
                value={username}
                onChange={(e)=>{setusername(e.target.value)}}
                id="username" type="text" class="block w-full px-4 py-2 mt-2 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring border"/>
            </div>

            <div>
                <label for="emailAddress">Email Address</label>
                <input
                value={Email}
                onChange={(e)=>{setEmail(e.target.value)}}
                id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2  bg-white border  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label for="password">Password</label>
                <input
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                id="password" type="password" class="block w-full px-4 py-2 mt-2 border  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <button
            onClick={handelLogIn}
            class=" w-full px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#ff9900ff] rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">LogIn</button>
        </div>
    </form>
</section>
    </div>
  )
}

export default LogIn