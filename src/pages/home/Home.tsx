import React from 'react';
import Header from '../../components/header/Header';
import MainTop from '../../components/mainTop/MainTop';
import Users from '../../components/users/Users';
import Footer from '../../components/footer/Footer';

const Home: React.FC = () => (
  <div>
    <Header/>
    <MainTop/>
    <Users/>
    <Footer/>
  </div>
);

export default Home;
