import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blogDeleted, selectBlogById } from "../lib/features/blogsSlice";

const SingelBlog = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) => selectBlogById(state, blogId));

  if (!blog) {
    return (
      <section>
        <h2>پستی که دنبالش میگردی پیدا نشد 😔</h2>
      </section>
    );
  }

  const deleteHandler = () => {
    if (blog) {
      dispatch(blogDeleted({ id: blogId }));
      navigate("/");
    }
  };
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

      <button
        onClick={deleteHandler}
        className="inline-block mx-5 bg-slate-600 p-5 rounded-md text-cyan-50"
      >
        حذف پست
      </button>
    </section>
  );
};

export default SingelBlog;
