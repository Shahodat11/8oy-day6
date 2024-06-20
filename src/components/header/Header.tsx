// import React from 'react'
import '../header/header.css'
import logo from "../../assets/Frame (1).svg"
import icon from "../../assets/Frame 142.svg"
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='container'>
      <div className="navbar">
        <img src={logo} alt="" />
        <ul>
            <li>
                <a className='a' href="#">ALL PRODUCTS</a>
            </li>
            <li>
                <a className='a' href="#">ABOUT SEEDRA</a>
            </li>
            <li>
                <a className='a' href="#">OUR BLOG</a>
            </li>
            <li>
                <a className='a' href="#">CONTACTS</a>
            </li>
        </ul>
        <img src={icon} alt="" />
      <input type="text" placeholder='Search' />
      <FaRegHeart  className='icons'/>
      <IoCartOutline  className='icons'/>
      </div>
    </div>
  )
}

export default Header
