import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./index.module.scss"
import { BasketContext } from "../../context/BasketContext";
function Header() {
  let location = useLocation();
  const { basket } = useContext(BasketContext)
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>EATWELL</div>
          <nav>
            <ul>
              <li>
                {location.pathname == "/" ? (
                  <a href="#home">HOME</a>
                ) : (
                  <Link to={"/"}>HOME</Link>
                )}
                <sup></sup>
              </li>
              <li>
                <a href="#about">ABOUT</a>
                <sup></sup>
              </li>
              <li>
                <a href="#menu">MENU</a>
                <sup></sup>
              </li>
              <li>
                <a href="#news">NEWS</a>
                <sup></sup>
              </li>
              <li>
                <a href="#gallery">GALLERY</a>
                <sup></sup>
              </li>
              <li>
                <Link to={"/add"}>ADD</Link>
                <sup></sup>
              </li>
              <li>
                <Link to={"/basket"}>BASKET</Link>
                <sup>{basket.length}</sup>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
