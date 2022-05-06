/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import s from "./style.module.scss";
import logo from "../img/logo.png";
import sun from "../img/icons/sun.png";
import Button from "../common/buttons";
import useScroll from "../../hooks/useScroll";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollTop = useScroll();
  return (
    <header className={`${s.header} ${scrollTop > 25 && s.header__scroll} `}>
      <div className={s.header_container}>
        <img src={sun} alt="sun" className={s.header_mobile_sun} />
        <img className={s.header_logo} src={logo} alt="logo" />
        <nav>
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
              <img src={sun} alt="sun" />
            </li>
            <li>
              <Button>Book a demo</Button>
            </li>
          </ul>
        </nav>
        <div className={s.header_menu} onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke={showMenu ? "blue" : "black"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
      <div
        className={`${s.header_mobile} ${
          scrollTop > 25 && s.header__mobile__scroll
        } `}
        style={{
          left: showMenu ? 0 : -400,
        }}
      >
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
            <Button>Book a demo</Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
