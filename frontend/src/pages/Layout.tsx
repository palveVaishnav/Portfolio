import Footer from "@/components/Footer";
import NavBar from "@/components/mobile-navBar";
import { Outlet } from "react-router-dom";
// import { Routing } from "@/App";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;