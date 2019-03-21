import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = () => {
    axios
      .get(url)
      .then(response => {
        setPosts(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchPosts, []);

  

  const elements = (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>{post.title}</li>
      ))}
    </ul>
  );

  return <div>{elements}</div>;
};

export default Posts;
