import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res.data);
  //       setPosts(res.data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setPosts(res.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="container">
      <h1>Axios</h1>
      <h2>{error !== "" && error}</h2>
      <div className="posts">
        {posts.slice(0, 12).map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title.slice(0, 15)}</h2>
            <p>{post.body.slice(0, 100)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
