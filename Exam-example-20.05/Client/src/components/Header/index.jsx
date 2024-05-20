import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import style from "./index.module.scss"

function Header() {
    return (
        <header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <h2>Selling <span style={{color: "red"}}>.</span></h2>
                    </Grid>
                    <Grid item xs={4}>
                        <ul>
                            <li>
                                <Link to={"/home"}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/add"}>Add</Link>
                            </li>
                            <li>
                                <Link to={"/basket"}>Basket</Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header