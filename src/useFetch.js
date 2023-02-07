import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  //   const DeleteBlog = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          //   console.log(res);
          if (!res.ok) {
            throw Error("Could not load the data");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setPending(false);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
