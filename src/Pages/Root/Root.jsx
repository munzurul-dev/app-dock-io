import { Outlet, useNavigation } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-purple-100"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 border-r-purple-500 animate-spin"></div>

          <div className="absolute inset-3 rounded-full bg-white shadow-sm flex items-center justify-center">
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div  className="bg-[#f8fafc]">
      <Navbar></Navbar>
      <main className="bg-[#f8fafc]">
        {" "}
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
