import React, { useState, useEffect } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';
import { FaSort } from 'react-icons/fa6';

const SortBar = ({ onSortsChange }) => {
    const [selectedType, setType] = useState('');
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Theo dõi thay đổi kích thước màn hình
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (e) => {
        setType(e.target.name)
        onSortsChange(
            e.target.name
        );
    }

    return (
        <>
            {isMobile && (
                <>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="filter-collapse"
                        aria-expanded={open}
                    >
                        <FaSort /> Sắp xếp
                    </Button>
                    <Collapse in={open || !isMobile}>
                        <div id="filter-collapse">
                            <Card className="mt-3">
                                <Card.Body className="d-flex flex-wrap justify-content-start align-items-start gap-2">
                                    <Button className='me-3'
                                        variant={selectedType === 'price-asc' ? 'primary' : 'outline-primary'}
                                        name='price-asc'
                                        onClick={(e) => handleClick(e)}>Giá tăng dần</Button>
                                    <Button className='me-3'
                                        variant={selectedType === 'price-desc' ? 'primary' : 'outline-primary'}
                                        name='price-desc'
                                        onClick={(e) => handleClick(e)}>Giá giảm dần</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Collapse>
                </>
            )}

            {!isMobile && <div className="g-3 d-flex">
                <h5 className='me-4 my-auto'>Sắp xếp theo:</h5>
                <Button className='me-3'
                    variant={selectedType === 'price-asc' ? 'primary' : 'outline-primary'}
                    name='price-asc'
                    onClick={(e) => handleClick(e)}>Giá tăng dần</Button>
                <Button className='me-3'
                    variant={selectedType === 'price-desc' ? 'primary' : 'outline-primary'}
                    name='price-desc'
                    onClick={(e) => handleClick(e)}>Giá giảm dần</Button>
            </div>}
        </>
    );
};

export default SortBar;