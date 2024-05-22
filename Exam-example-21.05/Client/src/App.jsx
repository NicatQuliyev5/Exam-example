import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import MenuContext from "./context/MenuContext";
import { useEffect, useState } from "react";
import { BasketContext } from "./context/BasketContext";
import useLocalStorage from "./hooks/UseLocalStorage";
const router = createBrowserRouter(ROUTES);
function App() {
  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")))
    setFavs(JSON.parse(localStorage.getItem("favs")))
  }, []);
  const [favs, setFavs] = useState([]);
  const [basket, setBasket] = useState([]);
  const [localBasket, setLocalBasket] = useLocalStorage("basket", [])
  const [localFavs, setLocalFavs] = useLocalStorage("favs", [])
  return (
    <>
      <BasketContext.Provider value={{ basket, setBasket, localBasket, setLocalBasket }}>
        <MenuContext.Provider value={{ favs, setFavs }}>
          <RouterProvider router={router} />
        </MenuContext.Provider>
      </BasketContext.Provider>
    </>
  );
}

export default App;
