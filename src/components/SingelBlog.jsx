import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingelBlog = () => {
  const { blogId } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );

  return (
    <section className="mt-5 p-5 space-y-5   w-5/6  ">
      <h3 className="text-2xl">{blog.title}</h3>
      <p>{blog.content}</p>
    </section>
  );
};

export default SingelBlog;
