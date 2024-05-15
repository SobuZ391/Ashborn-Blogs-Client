import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Layout = () => {
    return (
       <> <div className="bg-gray-100" >
        <Header/>
            <Outlet  />
        <Footer />    
        </div>
        </>
    );
};

export default Layout;