import { useContext, useEffect, useState } from "react"
import { getAll } from "../../services/index"
import Grid from '@mui/material/Grid';
import styles from "./index.module.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";

function Home() {
    const [shops, setShops] = useState([])
    const { basket, setBasket, setLocalBasket } = useContext(BasketContext)
    useEffect(() => {
        getAll().then((res) => {
            setShops(res.data)
        })
    }, [])
    return (
        <>
            <section id={styles["hero"]}>
                <div className={styles.heroTitles}>
                    <h4>SPRING / SUMMER COLLECTION 2017</h4>
                    <h1>Get up to 30% Off <br />New Arrivals
                    </h1>
                    <button>SHOP NOW</button>
                </div>
            </section>
            <section id="products">
                <div className="container">
                    <Grid container spacing={0}>
                        {shops && shops.map((shop) => {
                            return (<>
                                <Grid item xs={3}>
                                    <div className={styles.card}>
                                        <Link to={`/detail/${shop._id}`}>
                                            <div className={styles.icon}><FavoriteBorderIcon /></div>
                                            <div className={styles.cardImg}>
                                                <img src={shop.imgSrc} alt={shop.title} />
                                            </div>
                                            <div className={styles.cardBody}>
                                                <a href="">{shop.title}</a>
                                                <span>{shop.price}</span>
                                            </div>
                                        </Link>
                                        <div className={styles.add}>
                                            <a onClick={() => {
                                                const dublicated = basket.find((d) => d._id === shop._id)
                                                if (dublicated) {
                                                    dublicated.count += 1
                                                    setBasket([...basket])
                                                    setLocalBasket([...basket])
                                                } else {
                                                    const updated = { ...shop }
                                                    updated.count = 1
                                                    setBasket([...basket, updated])
                                                    setLocalBasket([...basket, updated])
                                                }
                                            }}>ADD TO CARD</a>
                                        </div>
                                    </div>
                                </Grid>
                            </>)
                        })}
                    </Grid>
                </div>
            </section>
        </>
    )
}

export default Home