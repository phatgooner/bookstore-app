import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const BookModal = ({ show, handleClose, book }) => {
    if (!book) return null;

    return (
        <>
            <Modal show={show} onHide={handleClose} centered size="md">
                <Modal.Header closeButton>
                    <Modal.Title>{book.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className="d-flex flex-column gap-2">
                    <div className="d-flex flex-column flex-md-row gap-4">
                        <div className="flex-shrink-0" style={{ maxWidth: "200px" }}>
                            <img
                                src={book.coverImage}
                                alt={book.title}
                                className="img-fluid rounded"
                            />
                        </div>

                        <div className="flex-grow-1">
                            <p><strong>Tác giả:</strong> {book.author}</p>
                            <p><strong>Ngôn ngữ:</strong> {book.language}</p>
                            <p><strong>Thể loại:</strong> {book.type}</p>
                            <p><strong>Giá gốc:</strong> <span className="text-danger fw-bold">{book.price.toLocaleString()} VNĐ</span></p>
                            <p><strong>Giảm giá đề xuất:</strong> <span className="text-danger fw-bold">{book.discount}%</span></p>
                            <p><strong>Giá sau KM:</strong> <span className="text-success fw-bold">{book.currentPrice.toLocaleString()} VNĐ</span></p>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Đóng</Button>
                    <Button variant="primary" >Thay đổi giá và xuất ra ESL</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookModal;