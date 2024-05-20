import { useEffect, useState } from "react"
import { getOne } from "../../services"

function Detail() {
    const [products, setProducts] = useState([])
    const { products } = useContext(ProductContext)
    useEffect(() => {
        getOne(products._id).then((res) => {
            setProducts(res.data.data)
        })
    }, [])
    return (
        <div>Detail</div>
    )
}

export default Detail