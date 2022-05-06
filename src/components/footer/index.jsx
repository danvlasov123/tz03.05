/* eslint-disable jsx-a11y/anchor-is-valid */

import s from "./style.module.scss";
import Button from "../common/buttons";
import logo from "../img/logo-white.png";
import In from "../img/icons/in.svg";
const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer__wrapper}>
          <div className={s.footer__wrapper_ctasection}>
            <p>
              Ready to get started?{" "}
              <span>
                Book a demo to kick off <br /> your own FinTech transformation
              </span>
            </p>
            <Button role="primaryWhite">Book a demo</Button>
          </div>
          <div className={s.footer__wrapper_line} />
          <div className={s.footer__wrapper_menu}>
            <div className={s.footer__wrapper_menu__nav}>
              <div className={s.footer__wrapper_menu__nav_logo}>
                <img src={logo} alt="logo" />
              </div>
              <div className={s.footer__wrapper_menu__nav_navigation}>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Platform Solutions</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Imprint</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={In} alt="in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.footer__wrapper_menu__contacts}>
              <ul>
                <li>© 2022 Alphanect. All Rights Reserved.</li>
              </ul>
              <ul>
                <li>Alpenstrasse 11, 6300 Zug, Switzerland</li>
                <li>•</li>
                <li>info@alphanect.com</li>
                <li>•</li>
                <li>+41 79 886 66 00</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
