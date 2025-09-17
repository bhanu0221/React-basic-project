// -----------------------------------------------Routing project ----------------------------------------------------------------

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Photos from './components/Photos'
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/photos' element={<Photos/>}/>
      </Routes>
    </div>
  )
}

export default App
