import { useEffect, useState } from "react";
import { ProductContext } from "./context/ProductContext";
import { ROUTES } from "./routes/ROUTES"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { getAll } from "./services";

const router = createBrowserRouter(ROUTES)
function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAll().then((res) => {
      setProducts(res.data.data)
    })
  }, [])

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        <RouterProvider router={router} />
      </ProductContext.Provider>
    </>
  )
}

export default App