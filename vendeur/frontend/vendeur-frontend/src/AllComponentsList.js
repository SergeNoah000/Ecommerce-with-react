import MainList from "./components/MainList"
import Header from "./components/Header"
import HeaderList from "./components/HeaderList"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

function AllComponentsList () {
    return (
        <div className="mobile-menu">
            <div id="layout-wrapper">
                <Header/>
            </div>
            <div className="row g-4 ">
                <HeaderList/>
            </div>
            <div className='app-menu navbar-menu'>
               <Sidebar />
            </div>
            <div >
                <MainList  />
               
               </div>
             
              
        </div>
    )
}
export default AllComponentsList