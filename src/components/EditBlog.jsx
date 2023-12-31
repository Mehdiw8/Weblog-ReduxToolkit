import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { blogUpdated } from "../lib/features/blogsSlice";

const EditBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog = useSelector((state) =>
    state.blogs.find((blog) => blog.id === blogId)
  );

  const submitHandler = (e) => {
    e.preventDefault();
    if ((title, content)) {
      dispatch(blogUpdated({ id: blogId, title, content }));
      navigate("/");
    }
  };

  if (!blog) {
    return (
      <section>
        <h2>پستی که دنبالش میگردی پیدا نشد 😔</h2>
      </section>
    );
  }
  return (
    <>
      <form
        onSubmit={submitHandler}
        className="mt-5 p-5 space-y-5  w-5/6 flex flex-col"
      >
        <label
          className="flex justify-between items-center w-80"
          htmlFor="title"
        >
          عنوان پست :
          <input
            type="text"
            className="border border-solid border-stone-600 p-3"
            placeholder={blog.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label
          className="flex justify-between items-center w-80"
          htmlFor="content"
        >
          محتوای پست :
          <input
            placeholder={blog.content}
            className="border border-solid border-stone-600 p-3"
            type="text"
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="inline-block bg-slate-600 p-5 rounded-md text-cyan-50"
        >
          ثبت
        </button>
      </form>
    </>
  );
};

export default EditBlog;
