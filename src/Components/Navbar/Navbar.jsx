import "./Navbar.css";
import Logo from '../../assets/logo.png';
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={Logo} alt="" className="logo" />
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}></Link> Home</li>
        <li><Link to="programs" smooth={true} offset={-260}></Link> Program</li>
        <li><Link to="about" smooth={true} offset={-150} duration={500} ></Link> About Us</li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500} ></Link> Campus</li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} ></Link> Testimonials</li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} ></Link> <button className="btn">Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
