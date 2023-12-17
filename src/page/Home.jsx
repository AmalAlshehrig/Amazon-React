import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import axios from'axios'
import { useEffect } from 'react'
import Popup from 'reactjs-popup';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {
    const nav=useNavigate()
    if(!localStorage.getItem('user')){
        nav('/')
    }
    const [data,setData]=useState([])
    const [Shop,setShop]=useState({})
    console.log(typeof Shop);
useEffect(() => {
  getData()
}, [])
const getData=()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then(res=>{
        setData(res.data)
        console.log(res.data)})
}
let newArr=[]
console.log(newArr);
// const handelAdd =(id)=>{
//     axios.get(`https://fakestoreapi.com/products/${id}`)
//     .then(res=>{
//         console.log(res)
//         newArr=[...Shop, res.data]
//     })
//         setShop(newArr)
// }
  return (
    <div>
        <NavBar/>
        <div>
            <img src='https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg'/>
        </div>
        <div className="grid grid-cols-4 gap-5 justify-center mt-4">
        {data.map((m,i)=>(
            <div key={i}>
                <div>
                <div class="w-full h-96 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
    <img class="object-cover w-full h-56" src={m.image}/>

    <div class="py-5 text-center flex flex-col">
        <a href="#" class="block text-md font-bold text-gray-800 " tabindex="0" role="link">{m.title}</a>
        <span class="text-sm text-gray-700">{m.price}</span>
        <Popup trigger=
                {<button className='text-blue-700 underline'>See All Detils</button>} 
                modal nested>
                {
                    close => (
                        <div className='border rounded-lg w-80 bg-white text-center p-8'>
                            <div className='content'>
                                <p>{m.category}</p>
                                <p>{m.description}</p>
                                <p>{m.price}</p>
                                <button
                                className='Font-bold text-blue-700'>Add To Cart</button>
                            </div>
                            <div>
                                <button className='text-red-900' onClick=
                                    {() => close()}>
                                        X
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
    </div>
</div>
</div>
            </div>
        ))}
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home