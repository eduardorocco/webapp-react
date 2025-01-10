import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import MoviePage from './pages/movies/MoviePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
