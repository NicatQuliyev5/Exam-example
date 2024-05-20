import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

function Home() {
  const { products } = useContext(ProductContext)
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {products && products.map((product) => {
              return (
                <>
                  <Grid item xs={4}>
                    <div className="card">
                      <div className="cardImg" style={{ width: "200px" }}>
                        <img src={product.imgSrc} alt="" style={{ width: "100%" }} />
                      </div>
                      <div className="cardDetail">
                        <p>{product.title}</p>
                        <span>{product.description}</span>
                        <button><Link to={`/detail/${product._id}`}>Detail</Link></button>
                      </div>
                    </div>
                  </Grid>

                </>
              )
            })}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Home