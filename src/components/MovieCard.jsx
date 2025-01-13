import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function MovieCard({ movie }) {
    const { title, director, genre, image, abstract, avg_vote } = movie;
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">{director}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
        <Card.Text className='font-weight-light font-size-sm'>
          {abstract}
        </Card.Text>
        <Card.Text>
            {avg_vote}
        </Card.Text>
        <Button variant="primary">
            <Link to={`/movies/${movie.id}`} className='text-white text-decoration-none'>Show more</Link>
        </Button>
      </Card.Body>
    </Card>
    )
}