import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorites'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'

function App() {

  return (

    <MovieProvider>
      <NavBar />
    <main className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorite />} />
      </Routes>
    </main>

     </MovieProvider>
    
   )
}



export default App
