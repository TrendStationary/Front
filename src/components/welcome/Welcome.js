import React from 'react';
import './welcome.css';
import { Col, Row } from 'react-bootstrap';
import img1 from '../../images/girl-welcome.jpg'
import { BiSolidTruck } from 'react-icons/bi';
import { BsRocketTakeoff } from 'react-icons/bs';
import { TbPigMoney } from 'react-icons/tb';
import { MdOutlineSupportAgent } from 'react-icons/md';
function Welcome() {
    return (
        <>
            <main>
                <Row className='welcome-container'>
                    <Col xs={12} lg={4} className='photo'>
                        <img src={img1} alt='Welcome' />
                    </Col>
                    <Col xs={12} lg={8} className='content'>
                        <Row className='first-row'>
                            <h4>WELCOME TO OUR SHOP</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmd tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam quis nostrud...</p>
                        </Row>
                        <Row>
                            <Col className='box' md={6}>
                                <Col md={2} className='icon'>
                                    <BiSolidTruck/>
                                </Col>
                                <Col md={8} className='content'>
                                    <h5>FREE WORLD DELIVERY</h5>
                                    <p>There are many variati passages of Lorem Ipsum available but majority suffered.</p>
                                </Col>
                            </Col>
                            <Col className='box' md={6}>
                                <Col md={2} className='icon'>
                                    <TbPigMoney/>
                                </Col>
                                <Col md={8} className='content'>
                                    <h5>WIN $100 TO SHOP</h5>
                                    <p>There are many variati passages of Lorem Ipsum available but majority suffered.</p>
                                </Col>
                            </Col>
                            <Col className='box' md={6}>
                                <Col md={2} className='icon'>
                                    <BsRocketTakeoff/>
                                </Col>
                                <Col md={8} className='content'>
                                    <h5>NEXT DAY DELIVERY</h5>
                                    <p>There are many variati passages of Lorem Ipsum available but majority suffered.</p>
                                </Col>
                            </Col>
                            <Col className='box' md={6}>
                                <Col md={2} className='icon'>
                                    <MdOutlineSupportAgent/>
                                </Col>
                                <Col md={8} className='content'>
                                    <h5>BEST ONLINE SUPPORT</h5>
                                    <p>There are many variati passages of Lorem Ipsum available but majority suffered.</p>
                                </Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </main>
        </>
    )
}

export default Welcome
