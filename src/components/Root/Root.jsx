import { Outlet } from "react-router-dom"
import Banner from "../../layouts/Banner"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const Root = () => {
  return (
    <div>
        <Banner/>
        <Header/>
        <div className="max-w-6xl mx-auto">
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root
