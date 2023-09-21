import Dashboard from "./Dasboard";
import Footer from "./Footer";
import HeaderList from "./HeaderList";
import Header from "./Header";
import AllArticles from "./AllArticles";
function Listblog(){
    return(
<div>
    <Header/>
    <HeaderList/>
    <Dashboard/>
    <AllArticles/>
    <Footer/>
    
</div>
    )
}

export default Listblog;