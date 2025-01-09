
import { BrowserRouter } from 'react-router'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/HomePage'
import MoviePage from './pages/movies/MoviePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies:id" element={<MoviePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
