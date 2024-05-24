import { useEffect, useState } from "react";
import useLocalStorage from "../../../Exam-example-22.05/Client/src/hooks/UseLocalStorage";
import { BasketContext } from "./context/BasketContext";
import { ROUTES } from "./routes/ROUTES"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { FavContext } from "./context/FavContext";

const router = createBrowserRouter(ROUTES)

function App() {
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")))
    setFav(JSON.parse(localStorage.getItem("fav")))
  }, []);
  const [basket, setBasket] = useState([])
  const [localBasket, setLocalBasket] = useLocalStorage("basket", [])
  const [fav, setFav] = useState([])
  const [localFav, setLocalFav] = useLocalStorage("fav", [])
  return (
    <>
      <FavContext.Provider value={{ fav, setFav, localFav, setLocalFav }}>
        <BasketContext.Provider value={{ basket, setBasket, localBasket, setLocalBasket }}>
          <RouterProvider router={router} />
        </BasketContext.Provider>
      </FavContext.Provider>
    </>
  )
}

export default App
