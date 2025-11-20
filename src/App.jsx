import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Loginform from './Loginform'
import Displayprofile from './Displayprofile'
import Update from './Update'

const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginform/>}/>
      <Route path='/Display' element={<Displayprofile/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
