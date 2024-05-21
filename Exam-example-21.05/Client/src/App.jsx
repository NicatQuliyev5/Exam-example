import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import MenuContext from "./context/MenuContext";
import { useState } from "react";
const router = createBrowserRouter(ROUTES);
function App() {
  const [favs, setFavs] = useState([]);

  return (
    <>
      <MenuContext.Provider value={{ favs, setFavs }}>
        <RouterProvider router={router} />
      </MenuContext.Provider>
    </> 
  );
}

export default App;
