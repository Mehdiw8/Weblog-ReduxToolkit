import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blogAdded } from "../lib/features/blogsSlice";
import { nanoid } from "@reduxjs/toolkit";
const CreateBlogForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (title && content) {
      dispatch(blogAdded({ title, content })); //payload ma hatman baid Yek Object bashad

      setTitle("");
      setContent("");
    }

    console.log(title);
    console.log(content);
    // navigate("/");
  };

  return (
    <section>
      <h3 className="my-5 text-xl">ساخت پست جدید</h3>
      <form className="w-full flex items-start flex-col space-y-10  ">
        <label className="w-full" htmlFor="title">
          عنوان پست :{" "}
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            className="w-full border border-solid p-2  mt-2"
          />
        </label>
        <label className="w-full" htmlFor="content">
          محتوای پست :{" "}
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            type="text"
            className="w-full border border-solid p-2 mt-2"
          />
        </label>

        <button
          onClick={submitHandler}
          className="inline-block w-full p-5 text-center bg-slate-500 text-cyan-50 text-xl rounded-md mt-1"
        >
          ساخت پست
        </button>
      </form>
    </section>
  );
};

export default CreateBlogForm;
