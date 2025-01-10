import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
const API_URL = 'http://localhost:3000/movies'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default function MoviePage() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    function fetchMovie() {
        axios.get(`${API_URL}/${id}`).then(response => setMovie(response.data)
    ).catch(error => console.error(error))
    }

    useEffect(() => { fetchMovie() }, [id])


    return (
        <Container>
            <Row>
                <h1>{movie.title}</h1>
                <img src={`http://localhost:3000/movies_cover/${movie.image}`} alt={movie.title} />
                <p>{movie.abstract}</p>
            </Row>
        </Container>
    )   
}