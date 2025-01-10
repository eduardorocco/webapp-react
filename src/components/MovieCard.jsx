import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MovieCard({ movie }) {
    const { title, director, genre, image, abstract } = movie;
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2">{director}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
        <Card.Text className='font-weight-light font-size-sm'>
          {abstract}
        </Card.Text>
        <Button variant="primary">Show more</Button>
      </Card.Body>
    </Card>
    )
}