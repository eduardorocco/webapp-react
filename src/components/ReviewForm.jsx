import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';


const API_URL = 'http://localhost:3000/movies';

export default function ReviewForm({ id, onSuccess = () => { } }) {

    const initialFormData = {
        name: '',
        text: '',
        vote: 1
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isFormValid, setIsFormValid] = useState(true);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        setErrorMessages([]);
    }, [formData]);

    function onFormChange(e) {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function storeReview(e) {
        e.preventDefault();
        setIsFormValid(true);
        setErrorMessages([]);

        const data = {
            text: formData.text.trim() || undefined,
            name: formData.name.trim(),
            vote: parseInt(formData.vote)
        };

        let errors = [];

        if (!data.name) {
            errors.push('Name is required.');
        }

        if (!data.vote || data.vote < 1 || data.vote > 5) {
            errors.push('Vote must be between 1 and 5.');
        }

        if (errors.length > 0) {
            setIsFormValid(false);
            setErrorMessages(errors);
            return;
        }

        if (!id) {
            setIsFormValid(false);
            setErrorMessages(['Movie ID is missing.']);
            return;
        }

        axios.post(`${API_URL}/${id}/reviews`, data)
            .then(res => {
                setFormData(initialFormData);
                onSuccess();
            })
            .catch(err => {
                console.error(err);
                setIsFormValid(false);
                setErrorMessages(['An error occurred while submitting your review.']);
            });
    }

    return (
        <Form onSubmit={storeReview}>
            <h3>Write a review</h3>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={onFormChange}
                    name="name"
                    placeholder="Enter your name"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Text</Form.Label>
                <Form.Control
                    type="text"
                    value={formData.text}
                    onChange={onFormChange}
                    name="text"
                    placeholder="Enter your review"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Vote</Form.Label>
                <Form.Select
                    aria-label='vote'
                    name='vote'
                    value={formData.vote}
                    onChange={onFormChange}>
                    <option value='5'>5</option>
                    <option value='4'>4</option>
                    <option value='3'>3</option>
                    <option value='2'>2</option>
                    <option value='1'>1</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>

            {!isFormValid && (
                <div className="text-danger mt-3">
                    {errorMessages.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}
        </Form>
    );
}

