import { useEffct, useEffect, useState } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:3000/movies';

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    function fetchMovies() {
        axios.get(API_URL)
            .then(response => setMovies(response.data))
    }

    useEffect(() => { fetchMovies() }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )   
}