import React from 'react';
import './footer.css';
import img1 from '../../../images/visa.png';
import img2 from '../../../images/american_express.png';
import img3 from '../../../images/discover.png';
import img4 from '../../../images/google_wallet.png';
import img5 from '../../../images/paypal.png';
import { BiLogoFacebook } from 'react-icons/bi';
import {PiInstagramLogoLight} from 'react-icons/pi';
import {TiSocialTwitter} from 'react-icons/ti';
import { FaGooglePlusG } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap';
function Footer() {
  return (
    <>
      <footer>
        <Row className='footer-container'>
          <Col xs={12} md={4} className='footer-box special'>
            <h5>CONTACT</h5>
            <ul>
              <li>BookClub - Stationary Store & United States</li>
              <li>000-000-0000</li>
              <li>123456</li>
              <li>sales@yourcompany.com</li>
            </ul>
          </Col>
          <Col xs={12} md={4} className='footer-box special'>
            <h5>INFORMATION</h5>
              <span>
                <a href=''>About Us</a><span> | </span>
                <a href=''>Delivery Information</a><span> | </span>
                <a href=''>Privacy Policy</a>
              </span>
              <span>
              <span> | </span><a href=''>Terms & Conditions</a><span> | </span>
                <a href=''>Site Map</a>
              </span>
              <div className='icons'>
                <div className='icon'><BiLogoFacebook/></div>
                <div className='icon'><PiInstagramLogoLight/></div>
                <div className='icon'><TiSocialTwitter/></div>
                <div className='icon'><FaGooglePlusG/></div>
                <div className='icon'><AiOutlineWifi/></div>
              </div>
          </Col>
          <Col xs={12} md={4} className='footer-box'>
          <h5>NEWSLETTER</h5>
            <p>Join us for get latest updates</p>
            <div className='subscribe'>
                <input type='text' placeholder='Enter Your Email Address'/>
                <button>SUBSCRIBE</button>
            </div>
          </Col>
        </Row>
        <Row className='footer-second'>
          <Col xs={12} md={6} className='text'>
            <p>Powered By OpenCart BookClub - Stationery Store © 2023</p>
          </Col>
          <Col xs={12} md={4} className='payments'>
            <img src={img1} alt='visa'/>
            <img src={img2} alt='american_express'/>
            <img src={img3} alt='discover'/>
            <img src={img4} alt='google_wallet'/>
            <img src={img5} alt='paypal'/>
          </Col>
        </Row>
      </footer>
    </>
  )
}

export default Footer
