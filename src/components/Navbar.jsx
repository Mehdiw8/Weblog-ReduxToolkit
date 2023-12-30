import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between bg-gray-900  text-white">
        <Link className="text-3xl m-4 font-bold font-heading" to="/">
          وبلاگ ریداکسی من
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
