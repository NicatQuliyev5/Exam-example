import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import styles from "./index.module.scss"
import { Link } from 'react-router-dom'
import { getOne } from '../../services'

function Detail() {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getOne(id).then((res) => {
      setProduct(res.data.data)
    })
  }, [])
  console.log(product)
  return (
    <>
      <div className="container">
        {product &&
          <>
            <Grid item xs={4}>
              <div className={styles.card}>
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
                  <a href="">Add To Card</a>
                </div>
              </div>
            </Grid>
          </>
        }
      </div>
    </>
  )
}

export default Detail

