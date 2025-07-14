import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import PageNotFound from './pages/PageNotFound'
import SeeReviewsPage from './pages/SeeReviewsPage'
import LeaveReviewPage from './pages/LeaveReviewPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 className='text-6xl font-sans font-bold text-black dark:text-gray-200'>Steam Review Site</h1>
        <Link className='text-black dark:text-gray-200' to="/">Home</Link> | <Link className='text-black dark:text-gray-200' to="/games">Games</Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/seeReviews/:gameName" element={<SeeReviewsPage />} />
          <Route path="/games/leaveReview/:gameName" element={<LeaveReviewPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
