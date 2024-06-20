import React from 'react'
import '../mainTop/mainTop.css'
import img from '../../assets/Frame 8.svg'
import img1 from '../../assets/Ellipse 2.svg'
import img2 from '../../assets/Rectangle 5.svg'

const MainTop = () => {
  return (
    <div className='container'>
      <div className="mainTop">
        <img className='img' src={img} alt="" />
      </div>
      <div className="nav-link2">
        <div className="nav">
            <h2>Seedra helps to grow fast and efficiant</h2>
            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
            <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
            <p>  Your easy growing experience is our guarantee Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
            <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
        </div>
        <img className='img1' src={img1} alt="" />
      </div>
      <div className="nav-link2">
        <img className='img2' src={img2} alt="" />
        <div className="nav">
            <h3 className='h2'>Our story</h3>
            <p className='p'>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
            <p className='p'>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
            <p className='p'>Your easy growing experience is our guarantee Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
            <p className='p'>Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
        </div>
      </div>
    </div>
  )
}

export default MainTop
