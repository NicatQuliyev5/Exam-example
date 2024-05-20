import { Outlet } from "react-router-dom"
import Header from "../components/Header"

function MainRoot() {
  return (
    <>
      <Header />
      <Outlet/>
    </>
  )
}

export default MainRoot