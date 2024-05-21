import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./index.module.scss"
function Header() {
  let location = useLocation();
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
              </li>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#menu">MENU</a>
              </li>
              <li>
                <a href="#news">NEWS</a>
              </li>
              <li>
                <a href="#gallery">GALLERY</a>
              </li>
              <li>
                <Link to={"/add"}>ADD</Link>
              </li>
              <li>
                <Link to={"/basket"}>BASKET</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
