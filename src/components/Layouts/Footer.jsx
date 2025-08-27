import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container>
            <Row>
                {/* Logo & mô tả */}
                <Col md={4} className="mb-4">
                    <h4 className="fw-bold text-main">ABC</h4>
                    <p>Thư viện sách đa dạng và phong phú.</p>
                </Col>

                {/* Liên kết nhanh */}
                <Col md={3} className="mb-4">
                    <h6 className="fw-bold">Tính năng</h6>
                    <ul className="list-unstyled">
                        <li><Link to="/library" className="text-decoration-none text-dark">Tìm sách</Link></li>
                        <li><Link to="/liked-books" className="text-decoration-none text-dark">Sản phẩm yêu thích</Link></li>
                    </ul>
                </Col>
                
                {/* Liên hệ */}
                <Col md={3} className="mb-4">
                    <h6 className="fw-bold">Liên hệ</h6>
                    <ul className="list-unstyled">
                        <li><Link className="text-decoration-none text-dark" to="mailto:support@abc.com">Email: support@abc.com</Link></li>
                        <li><Link className="text-decoration-none text-dark" to="tel:19006868">Hotline: 1900 6868</Link></li>
                        <li className="d-flex gap-3">
                            <Link to="https://www.facebook.com/" target='blank'><i className="bi bi-facebook fs-4 text-primary"></i></Link>
                            <Link to="https://www.youtube.com/" target='blank'><i className="bi bi-youtube fs-4 text-danger"></i></Link>
                            <Link to="https://www.instagram.com/" target='blank'><i className="bi bi-instagram fs-4 text-warning"></i></Link>
                        </li>
                    </ul>
                </Col>

                {/* Tải app */}
                <Col md={2} className="mb-4">
                    <h6 className="fw-bold">Tải ứng dụng điện thoại</h6>
                    <ul className="list-unstyled">
                        <li className='mb-2'><img alt="android" src="https://ant-files-v1-staging.s3.ap-southeast-1.amazonaws.com/doannh/logo_android.png" /></li>
                        <li><img alt="ios" src="https://ant-files-v1-staging.s3.ap-southeast-1.amazonaws.com/doannh/logo_ios.png" /></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <h6 className="fw-bold">CÔNG TY TNHH GIÁO DỤC VÀ ĐÀO TẠO ABC</h6>
                <p className='mb-0'>Trụ sở chính: 64 Nguyễn Trường Tộ, P. Tân Thành, Q. Tân Phú, TP Hồ Chí Minh, Việt Nam</p>
            </Row>
            <hr />
            <p className="text-center text-muted">© {new Date().getFullYear()} ABC. All rights reserved.</p>
        </Container>
    );
};

export default Footer;