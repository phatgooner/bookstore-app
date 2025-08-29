import React, { useState } from 'react';
import { Card, Button } from "react-bootstrap";
import BookModal from '../Modals/BookModal';

const BookCard = ({ book }) => {
    const { title, coverImage, price } = book;
    const [showModal, setShowModal] = useState(false);

    return (
        <Card className="h-100 shadow-sm">
            <BookModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                book={book}
            />

            <Card.Img
                variant="top"
                src={coverImage}
                alt={title}
                style={{ height: "240px", objectFit: "cover", cursor: "pointer" }}
            />
            <Card.Body className="d-flex flex-column justify-content-between card-content gap-3">
                <Card.Title role='button' className="fs-6 fw-bold" >{title}</Card.Title>

                <div role='button' className="d-flex align-items-center gap-2 justify-content-between" >
                    <div>
                        Giá gốc: <span className="text-danger fw-bold">{price.toLocaleString()} VNĐ</span>
                    </div>
                </div>

                <Button variant="outline-primary" onClick={() => setShowModal(true)}>Đề xuất giá</Button>
            </Card.Body>
        </Card>
    );
};

export default BookCard;