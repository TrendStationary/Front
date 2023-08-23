import React from 'react';
import './popular-product.css';
import { Col, Row } from 'react-bootstrap';
import {NavLink, Outlet } from 'react-router-dom';

function PopularProduct() {
    return (
        <>
            <section>
            <h5>POPULAR PRODUCTS</h5>
            <Row className='popular-product-container'>
                <Col sm={12} className=''>
                    <nav className='links-filter'>
                        <NavLink to='clipboard'>clipboard</NavLink>
                        <NavLink to='envelopes'>envelopes</NavLink>
                        <NavLink to='noteBooks'>note books</NavLink>
                        <NavLink to='highlighter'>highlighter</NavLink>
                    </nav>   
                </Col>
                <Col sm={12} lg={4} className=''>
                    <Outlet/>        
                </Col>
                </Row>
            </section>
        </>
    )
}

export default PopularProduct
