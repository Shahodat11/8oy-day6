import React from 'react';
import '../contact/contact.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import tel from '../../assets/Frame 187.svg'
import img from '../../assets/Frame 188.svg'
import imgs from '../../assets/Frame 189.svg'

const Contact: React.FC = () => (
  <div>
    <Header/>
    <div className="contact">
        <div className="nav2">
            <h1 className='h1'>Contact us</h1>
            <p className='contact-p'>Send for us your request and we will get in touch with you as soon as possible</p>
            <div className="nav3">
                <img src={tel} alt="" />
                <h4 className='contact-h2'>+380 98 782 82 23</h4>
            </div>
            <div className="nav3">
                <img src={img} alt="" />
                <h4 className='contact-h2'>mailmail@gmail.com</h4>
            </div>
        </div>
        <img src={imgs} alt="" />
    </div>
    <Footer/>
  </div>
);

export default Contact;
