import React from 'react';
import { Card } from 'react-bootstrap';

//App components
const ContactInfo = () => (
    <div className="mt-4 text-center">
        <Card>
            <Card.Body>
                <Card.Title>Email</Card.Title>
                <Card.Text><a href="mailto:wearethefailsafe@gmail.com">wearethefailsafe@gmail.com</a></Card.Text>
            </Card.Body>
        </Card>
        <Card className="mt-2">
            <Card.Body>
                <Card.Title>Phone <em>(Jesse Weber)</em></Card.Title>
                <Card.Text>763-447-8705</Card.Text>
            </Card.Body>
        </Card>
    </div>
);

export default ContactInfo;