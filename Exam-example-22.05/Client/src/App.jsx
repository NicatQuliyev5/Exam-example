import { RouterProvider } from "react-router-dom"
import { ROUTES } from "./routes/ROUTES"
import { createBrowserRouter } from "react-router-dom"
import { useEffect, useState } from "react";
import useLocalStorage from "./hooks/UseLocalStorage"
import { BasketContext } from "./context/BasketContext";

const routes = createBrowserRouter(ROUTES)

function App() {
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")))
  }, []);
  const [basket, setBasket] = useState([]);
  const [localBasket, setLocalBasket] = useLocalStorage("basket", [])

  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket, localBasket, setLocalBasket }}>
        <RouterProvider router={routes} />
      </BasketContext.Provider>
    </>
  )
}

export default App
