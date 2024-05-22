import { useContext, useEffect, useState } from "react"
import { getOne } from "../../services"
import { Link, useParams } from "react-router-dom"
import styles from "./index.module.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { BasketContext } from "../../context/BasketContext";

function Detail() {
    const [shop, setShop] = useState(null)
    const { basket, setBasket, setLocalBasket } = useContext(BasketContext)
    const { id } = useParams()
    useEffect(() => {
        getOne(id).then((res) => {
            setShop(res.data)
            console.log(res.data)
        })
    }, [id])

    return (
        <>
            {
                shop && <div className={styles.card}>
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
            }
        </>
    )
}

export default Detail