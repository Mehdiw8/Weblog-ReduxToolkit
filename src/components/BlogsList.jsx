import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BlogsList = () => {
  const blogs = useSelector((state) => state.blogs);

  const blog = blogs.map((blog) => {
    return (
      <section
        className="mt-5 p-5 space-y-5  border w-5/6 border-solid border-stone-800"
        key={blog.id}
      >
        <h3 className="text-2xl">{blog.title}</h3>
        <p>{blog.content.slice(0, 100)}</p>
        <Link
          className="inline-block bg-slate-600 p-5 rounded-md text-cyan-50"
          to={`blog/${blog.id}`}
        >
          <button>بیشتر ...</button>
        </Link>
      </section>
    );
  });

  return (
    <section>
      <Link
        className="inline-block w-full p-5 text-center bg-slate-500 text-cyan-50 text-xl rounded-md mt-1"
        to="/create-blog"
      >
        <button>ساخت پست جدید</button>
      </Link>
      <h1 className="my-8">نمایش تمامی پست ها</h1>
      {blog}
    </section>
  );
};

export default BlogsList;
