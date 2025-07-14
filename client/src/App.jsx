import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import PageNotFound from './pages/PageNotFound'
import GamePage from './pages/GamePage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 className='text-[28px] font-sans'>Steam Review Site</h1>
        <Link to="/">Home</Link> | <Link to="/games">Games</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />}>
            <Route path=":gameName" element={<GamePage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
