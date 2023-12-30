import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import NotFound from "../components/Not-Found";
import SingelBlog from "../components/SingelBlog";
import CreateBlogForm from "../components/CreateBlogForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "blog/:blogId",
        element: <SingelBlog />,
      },
      {
        path: "create-blog",
        element: <CreateBlogForm />,
      },
    ],
  },
]);
