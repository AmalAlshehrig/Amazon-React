import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './Home'
import Card from './Card'
import LogIn from './LogIn'
import Error from './Error'
function Rout() {
  return (
    <div>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Card' element={<Card/>}/>
            <Route path='/' element={<LogIn/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default Rout