import React from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({
    typeName,
    filters,
    onFilterChange,
    languageOptions = []
}) => {
    const handleChange = (e) => {
        onFilterChange({
            ...filters,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Form className="my-4 border border-1 rounded-4 p-3">
            <Row className="g-3 align-items-end">
                {/* Search by name */}
                <Col md={6}>
                    <Form.Label>Tên {typeName}</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder={`Nhập tên ${typeName}...`}
                            name="search"
                            value={filters.search}
                            onChange={(e) => handleChange(e)}
                        />
                        <InputGroup.Text>
                            <FaSearch />
                        </InputGroup.Text>
                    </InputGroup>
                </Col>

                {/* Filter by language */}
                <Col md={3}>
                    <Form.Label>Thế loại</Form.Label>
                    <Form.Select name="language" value={filters.language} onChange={(e) => handleChange(e)}>
                        <option value="">Tất cả</option>
                        {languageOptions.map((lang, idx) => (
                            <option key={idx} value={lang}>{lang}</option>
                        ))}
                    </Form.Select>
                </Col>


                {/* Filter by price */}
                <Col md={3}>
                    <Form.Label>Khoảng giá (VNĐ)</Form.Label>
                    <Form.Select name="price" value={filters.price} onChange={(e) => handleChange(e)}>
                        <option value="">Tất cả</option>
                        <option value="lt200">Dưới 200.000</option>
                        <option value="200to500">200.000–500.000</option>
                        <option value="gt500">Trên 500.000</option>
                    </Form.Select>
                </Col>
            </Row>
        </Form>
    );
};

export default SearchBar;