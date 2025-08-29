import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <Container>
            <p className="text-center text-muted">© {new Date().getFullYear()} ABC. All rights reserved.</p>
        </Container>
    );
};

export default Footer;