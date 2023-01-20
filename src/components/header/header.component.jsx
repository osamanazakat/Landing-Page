import Navbar from "../navbar/navbar.component";
import HeaderImage from "../../assets/illustration-intro.svg";
import Button from "../button/button.component";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
      <div className="header__container container">
        <div className="header__left">
          <h1 className="header__heading">
            Bring everyone together to build better products.
          </h1>
          <p className="header__text">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button text="Get Started" className="btn-red" />
        </div>
        <div className="header__right">
          <div className="header__image-container">
            <img src={HeaderImage} alt="Header" className="header__img" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
