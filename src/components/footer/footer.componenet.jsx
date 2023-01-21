import { footerIcons, footerLinks } from "../../data";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__left">
          <img
            src="https://em-estabillo-manage-landing-page.netlify.app/images/logo-white.svg"
            alt=""
            className="footer__logo"
          />
          <div className="footer__icons">
            {footerIcons.map(({ id, icon }) => {
              return (
                <a href="#" className="footer__icon" key={id}>
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer__middle">
          {footerLinks.map(({ id, link }) => {
            return (
              <a href="#" className="footer__link" key={id}>
                {link}
              </a>
            );
          })}
        </div>
        <div className="footer__right">
          <form>
            <input type="email" required placeholder="Email" />
            <button type="submit" className="btn btn-red">
              Go
            </button>
          </form>
          <p className="footer__copyright">
            Copyright 2023. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
