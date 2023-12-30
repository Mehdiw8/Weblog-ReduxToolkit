import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-12 max-w-7xl  ">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
