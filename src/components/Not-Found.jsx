import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p>صفحه مورد نظر یافت نشد 🎈ّ</p>
      <Link className="text-3xl m-4 font-bold font-heading" to="/">
        <button className="border border-solid border-slate-600 p-4 bg-slate-200 rounded-lg">
          برگشت به خانه
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
