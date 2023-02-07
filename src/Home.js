import BlogList from "./BlogList";
import { Spin } from "antd";
import useFetch from "./useFetch";
import "./Ant.css";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div className="spin">
          <Spin tip="wait a moment" size="large" />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "issac")}
        title="Issac's Blogs"
      /> */}
    </div>
  );
};

export default Home;
