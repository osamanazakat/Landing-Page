import Logo from "../../assets/logo.svg";
import { navLinks } from "../../data";
import Button from "../button/button.component";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [navShowing, setNavShowing] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <img src={Logo} alt="Navbar logo" className="navbar__logo" />
        <ul
          className={`navbar__links-container ${
            navShowing ? "show-nav" : "hide-nav"
          }`}
        >
          {navLinks.map(({ id, link }) => {
            return (
              <li key={id}>
                <a href="#" className="navbar__link">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <Button text="Get Started" className="btn-red navbar__btn" />
        <button
          className="navbar__toggle-btn"
          onClick={() => setNavShowing(!navShowing)}
        >
          {navShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
