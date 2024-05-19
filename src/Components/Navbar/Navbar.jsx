import "./Navbar.css";
import Logo from '../../assets/logo.png';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const closeMenu = useRef(null);
  const closeMobileMenu = (e) => {
    if(e.target === closeMenu.current) {
      setMobileMenu(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu (false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={Logo} alt="" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'} ref={closeMenu} onClick={closeMobileMenu}>
        <li><Link to="hero" smooth={true} spy={true} activeClass="active" offset={0} duration={500}>Home</Link></li>
        <li><Link to="programs" smooth={true} spy={true} offset={-260} activeClass="active" duration={500}>Programs</Link></li>
        <li><Link to="about" smooth={true} spy={true} offset={-130} activeClass="active" duration={500} >About Us</Link></li>
        <li><Link to="campus" smooth={true} spy={true} offset={-260} activeClass="active" duration={500} >Campus</Link></li>
        <li><Link to="testimonials" smooth={true} spy={true} offset={-260} activeClass="active" duration={500} >Testimonials</Link></li>
        <li><Link to="contact" className="btn" smooth={true} spy={true} offset={-260} activeClass="active" duration={500}>ContactUs</Link></li>
      </ul>
      <img src={menu_icon} className="menu-icon" onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar
