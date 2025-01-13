import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
const API_URL = 'http://localhost:3000/movies'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as fullDot } from '@fortawesome/free-solid-svg-icons/faCircle';
import { faCircle as emptyDot } from '@fortawesome/free-regular-svg-icons/faCircle';

export default function MoviePage() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})

    function fetchMovie() {
        axios.get(`${API_URL}/${id}`).then(response => setMovie(response.data)
        ).catch(error => console.error(error))
    }


    useEffect(() => { fetchMovie() }, [id])

    function getDots(avg_vote) {
            const dots = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= avg_vote) {
                    dots.push(<FontAwesomeIcon icon={fullDot} key={i} />)
                } else {
                    dots.push(<FontAwesomeIcon icon={emptyDot} key={i} />)
                }
            }
            return dots;
        }

    console.log(movie.reviews);
    return (
        <Container>
            <Row>
                <h1>{movie.title}</h1>
                <Col>
                    <p>{movie.abstract}</p>
                    <p>{movie.director}</p>
                    <p>{movie.release_year}</p>
                    <p>{getDots(movie.avg_vote)}</p>
                </Col>
                <Col>
                    <img src={movie.image} alt={movie.title} />
                </Col>
            </Row>
            <Row>
                <h2>Reviews</h2>
                {movie.reviews && movie.reviews.map(review => (
                    <Card key={review.id}>
                        <Card.Body>
                            <Card.Title>{review.name}</Card.Title>
                            <Card.Text>{review.text}</Card.Text>
                            <Card.Text>{getDots(review.vote)}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Row>  
        </Container>
    )
}