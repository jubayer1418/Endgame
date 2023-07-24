import { Outlet } from "react-router-dom";
import Footer from "../Page/Share/Footer";
import Navbar from "../Page/Share/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
