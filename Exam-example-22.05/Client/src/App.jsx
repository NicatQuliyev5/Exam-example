import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom"
import useLocalStorage from "./hooks/UseLocalStorage"
import { ROUTES } from "./routes/ROUTES"
import { createBrowserRouter } from "react-router-dom"
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
