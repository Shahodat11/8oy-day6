import '../footer/footer.css'
import logo from '../../assets/Frame (1).svg'

const Footer = () => {
  return (
    <div className='container'>
      <div className="footer">
        <h1>ALL PRODUCTS</h1>
        <h1>ABOUT SEEDRA</h1>
        <img src={logo} alt="" />
        <h1>Terms&Conditions</h1>
        <h1>Privacy Policy</h1>
      </div>
      <hr />
    </div>
  )
}

export default Footer
