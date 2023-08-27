import React, {useState} from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import en from '../../../images/en-gb.png';
import ar from '../../../images/ar.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { CiUser } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { LiaShoppingBagSolid } from 'react-icons/lia';



function AppNavBar() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
       <header>
        <div className='container container-header'>
          <div className='row bg-header'>
            <div className='logo col-md-2 col-sm-12 d-flex justify-content-start px-0'>
               <img src={logo}  className='w-75 p-3'/>
               <hr/>
            </div>
            <div className='links-header col-md-8 col-sm-12 d-flex justify-content-center align-items-center'>
              <ul className='links-ul-header d-flex  m-0'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className='col-md-2 col-sm-2 icons-header d-flex justify-content-end align-items-center px-0'>
               <ul className='m-0 d-flex icons-ul-header align-items-center'style={{"height":"100%"}}>
                <li className='px-2 user d-flex align-items-center' style={{"height":"100%","backgroundColor":"#e8e8e8"}}><Link to="" onClick={toggleDropdown}><CiUser style={{"fontSize":"30px"}}/></Link></li>
                <li className='px-2 bag d-flex align-items-center' style={{"height":"100%","backgroundColor":"#e0e0e0"}}><Link to="/bag"><LiaShoppingBagSolid style={{"fontSize":"30px"}}/></Link></li>
               </ul>
               <div className={`user-dropdown ${dropdownOpen ? 'open' : ''}`}>
                <ul className='p-3'>
                  <li className='p-2'><Link to="/register">Register</Link></li>
                  <li className='p-2'><Link to="/login">Login</Link></li>
                  <li className='p-2'><Link to='/shopping-cart'>Shopping Cart</Link></li>
                  <li className='p-2'><Link to="checkout">Checkout</Link></li>
                  <li className='p-2'>LANGUAGE</li>
                  <div className='d-flex'>
                  <li className='p-2'><Link to="/"><img src={en} className='mr-1'/>English</Link></li>
                  <li className='p-2'><Link to="/"><img src={ar} className='mr-1'/>Arabic</Link></li>
                  </div>
                </ul>
              </div>
            </div>
            {/* <!--start mobile--> */}
            <div className='d-flex col-12 p-0 align-items-center menu-mobile'>
             <div className='d-flex col-8 px-2' style={{"cursor":"pointer"}}>
              <div className='mr-2'><FaBars style={{"fontSize":"25px"}}/></div>
              <div><h5>Menu</h5></div>
             </div>
            <div className='col-md-2 col-sm-2 icons-header-mobile d-flex justify-content-end align-items-center px-0'>
               <ul className='m-0 d-flex icons-ul-header align-items-center'style={{"height":"100%"}}>
                <li className='px-2 user d-flex align-items-center' style={{"height":"100%","backgroundColor":"#e8e8e8"}}><Link onClick={toggleDropdown} to=""><CiUser style={{"fontSize":"30px"}}/></Link></li>
                <li className='px-2 bag d-flex align-items-center' style={{"height":"100%","backgroundColor":"#e0e0e0"}}><Link to="/bag"><LiaShoppingBagSolid style={{"fontSize":"30px"}}/></Link></li>
               </ul>
               <div className={`user-dropdown ${dropdownOpen ? 'open' : ''}`}>
                <ul className='p-3'>
                  <li className='p-2'><Link to="/register">Register</Link></li>
                  <li className='p-2'><Link to="/login">Login</Link></li>
                  <li className='p-2'><Link to='/shopping-cart'>Shopping Cart</Link></li>
                  <li className='p-2'><Link to="checkout">Checkout</Link></li>
                  <li className='p-2'>LANGUAGE</li>
                  <div className='d-flex'>
                  <li className='p-2'><Link to="/"><img src={en} className='mr-1'/>English</Link></li>
                  <li className='p-2'><Link to="/"><img src={ar} className='mr-1'/>Arabic</Link></li>
                  </div>
                </ul>
              </div>
            </div>
            </div>
            {/* <!--end mobile--> */}
          </div>
        </div>
       </header>
    </>
  )
}
export default AppNavBar
