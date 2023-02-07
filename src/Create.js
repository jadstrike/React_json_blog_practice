import { useState } from "react";
import { Button } from "antd/es/radio";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const Navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      Navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handlesubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Tony">Tony</option>
          <option value="Jack">Jack</option>
          <option value="issac">issac</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog....</button>}
      </form>
    </div>
  );
};

export default Create;
