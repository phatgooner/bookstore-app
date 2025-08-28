import React, { useContext, useState } from 'react';
import { Card, Button } from "react-bootstrap";
import { FaStar, FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { ModalContext } from '../../context/ModalContext';
import { UserContext } from '../../context/UserContext';
import BookModal from '../Modals/BookModal';

const BookCard = ({ book }) => {
    const { title, coverImage, price, rating, discount, currentPrice } = book;
    const { user, setFavoriteBook, removeFavoriteBook } = useContext(UserContext);
    const { setShow, setType } = useContext(ModalContext);
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
                onClick={() => setShowModal(true)}
            />
            <Card.Body className="d-flex flex-column justify-content-between card-content">
                <Card.Title role='button' className="fs-6 fw-bold" onClick={() => setShowModal(true)}>{title}</Card.Title>

                <div role='button' className="d-flex align-items-center gap-2 justify-content-between" onClick={() => setShowModal(true)}>
                    <div>
                        <span className="text-warning">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    size={14}
                                    color={i < Math.floor(rating) ? "#ffc107" : "#e4e5e9"}
                                />
                            ))}
                        </span>
                        <small className="text-muted ms-1">({rating})</small>
                    </div>
                    <span className="text-white mb-0 px-1 bg-danger">{discount ? `-${discount}%` : ''}</span>
                </div>

                <div className="row mt-3">
                    <div className="col-8 d-flex flex-column">
                        <h6 className="text-secondary fw-light mb-0 text-decoration-line-through">USD {price.toFixed(2)}</h6>
                        <h6 className="text-success mb-0">{currentPrice ? `USD ${currentPrice.toFixed(2)}` : ''}</h6>
                    </div>
                    <div className="col-4 d-flex align-items-end">
                        {user && user.likedBooks.includes(book.id) ? <Button variant={"danger"} className='rounded-pill' onClick={() => { removeFavoriteBook(book.id); toast.success('Đã xóa khỏi danh sách yêu thích') }}>
                            <FaHeart />
                        </Button> :
                            <Button variant={"outline-primary"} className='rounded-pill' onClick={user ? () => { setFavoriteBook(book.id); toast.success('Đã thêm vào danh sách yêu thích') } : () => { setType('login'); setShow(true); }}>
                                <FaHeart />
                            </Button>}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BookCard;