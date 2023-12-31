import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between bg-gray-900  text-white">
        <Link className=" inline-block text-3xl m-4 font-bold font-heading mr-14 " to="/">
          وبلاگ ریداکسی من
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
