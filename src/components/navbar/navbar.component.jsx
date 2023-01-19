import Logo from "../../assets/logo.svg";
import { navLinks } from "../../data";
import Button from "../button/button.component";
import { FiMenu } from "react-icons/fi";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <img src={Logo} alt="Navbar logo" className="navbar__logo" />
        <ul className="navbar__links-container">
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
        <Button text="Get Started" className="btn-red" />
        <div className="navbar__btn-container">
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
