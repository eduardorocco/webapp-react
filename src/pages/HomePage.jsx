import { useEffct, useEffect, useState } from 'react';
import axios from 'axios';
const API_URL = 'http://localhost:3000/movies';
import MovieCard from '../components/MovieCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function HomePage() {

    const [movies, setMovies] = useState([]);

    function fetchMovies() {
        axios.get(API_URL)
            .then(response => setMovies(response.data))
    }

    useEffect(() => { fetchMovies() }, []);

    return (
        <Container>
            <Row>
                {movies.map(movie => (
                    <Col xs={12} md={6} lg={4} key={movie.id} className='mb-4'>
                        <MovieCard movie={movie} />
                    </Col>
                )
                )}

            </Row>
        </Container>
    )
}