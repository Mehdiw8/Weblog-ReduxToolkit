import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SingelBlog = () => {
  const { blogId } = useParams();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );
  if (!blog) {
    return (
      <section>
        <h2>پستی که دنبالش میگردی پیدا نشد 😔</h2>
      </section>
    );
  }
  return (
    <section className="mt-5 p-5 space-y-5   w-5/6  ">
      <h3 className="text-2xl">{blog.title}</h3>
      <p>{blog.content}</p>
      <Link
        className="inline-block bg-slate-600 p-5 rounded-md text-cyan-50"
        to={`/edit-blog/${blog.id}`}
      >
        <button>ویرایش پست</button>
      </Link>
    </section>
  );
};

export default SingelBlog;
