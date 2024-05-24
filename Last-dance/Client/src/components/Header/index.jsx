import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./index.module.scss"

function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <a href="">
              <span>FOUNDATION</span>
            </a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/add"}>Add</Link>
              </li>
              <li>
                <Link to={"/basket"}>Basket</Link>
              </li>
              <li>
                <Link to={"/fav"}>Favorite</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header