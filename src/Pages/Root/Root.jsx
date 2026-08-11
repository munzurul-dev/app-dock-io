import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Root = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <main className="bg-[#f8fafc]"> <Outlet></Outlet></main>
           <Footer></Footer>
        </div>
    );
};

export default Root;