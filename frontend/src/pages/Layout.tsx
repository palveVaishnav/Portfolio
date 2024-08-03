import NavBar from "@/components/mobile-navBar";
import { Outlet } from "react-router-dom";
// import { Routing } from "@/App";

const Layout = () => {
  return (
    <>
      <div className='m-2'>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
};

export default Layout;