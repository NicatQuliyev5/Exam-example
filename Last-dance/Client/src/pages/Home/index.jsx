import React, { useContext, useEffect, useState } from 'react'
import { getAll } from '../../services'
import Grid from '@mui/material/Grid';
import styles from "./index.module.scss"
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/BasketContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import { FavContext } from '../../context/FavContext';


function Home() {
    const [products, setProducts] = useState([])
    const { basket, setBasket, localBasket, setLocalBasket } = useContext(BasketContext)
    const { fav, setFav, localFav, setLocalFav } = useContext(FavContext)
    useEffect(() => {
        getAll().then((res) => {
            setProducts(res.data.data)
        })
    }, [])


    return (
        <>
            <div className="container">
                <div className={styles.cards}>
                    <Grid container spacing={2}>
                        {products && products.map((product) => {
                            return (
                                <>
                                    <Grid item xs={4}>
                                        <div className={styles.card}>
                                            <Button variant='contained' color='warning' className={styles.fav} onClick={() => {
                                                const doubleFav = fav.find((f) => f._id == product._id)
                                                if (doubleFav) {
                                                    const filterFav = fav.filter((f) => f._id !== product._id)
                                                    setFav([...filterFav])
                                                    setLocalFav([...filterFav])
                                                } else {
                                                    setFav([...fav, product])
                                                    setLocalFav([...fav, product])
                                                }
                                            }}>
                                                <FavoriteIcon />
                                            </Button>
                                            <Link to={`/detail/${product._id}`}>
                                                <div className={styles.cardImg}>
                                                    <img src={product.imgSrc} alt={product.title} />
                                                </div>
                                                <div className={styles.cardBody}>
                                                    <h1>{product.title}</h1>
                                                    <p>{product.description}</p>
                                                </div>
                                            </Link>
                                            <div className={styles.add}>
                                                <div onClick={() => {
                                                    const doublePro = basket.find((d) => d._id == product._id)
                                                    if (doublePro) {
                                                        doublePro.count += 1
                                                        setBasket([...basket])
                                                        setLocalBasket([...basket])
                                                    } else {
                                                        const updated = { ...product }
                                                        updated.count = 1
                                                        setBasket([...basket, updated])
                                                        setLocalBasket([...basket, updated])
                                                    }
                                                }}>Add To Card</div>
                                            </div>
                                        </div>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Home