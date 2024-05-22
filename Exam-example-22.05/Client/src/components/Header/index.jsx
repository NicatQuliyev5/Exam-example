import { Link } from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation } from 'react-router-dom';
import styles from "./index.module.scss";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

function Header() {
    let location = useLocation();
    const { basket } = useContext(BasketContext)
    return (
        <header>
            <div className="container">
                <div className={styles.header}>
                    <a className={styles.logo}>
                        <span className="logo-left">COLO</span>
                        <span className={styles.logoRight}>SHOP</span>
                    </a>
                    <nav>
                        <ul>
                            <li>
                                {location == "/" ? <><a href="#home">Home</a><sup></sup></> : <><Link to={"/"}>Home</Link><sup></sup></>}
                            </li>
                            <li><a href="#categories">Categories</a><sup></sup></li>
                            <li><a href="#products">Products</a><sup></sup></li>
                            <li><a href="#best-seller">Best Seller</a><sup></sup></li>
                            <li><a href="#blog">Blog</a><sup></sup></li>
                            <li>
                                <Link to={"/add"}>Add</Link><sup></sup>
                            </li>
                            <li className={styles.basket}>
                                <Link to={"/basket"}><ShoppingCartIcon /></Link>
                                <sup className={styles.basketCount}>{basket.length}</sup>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header