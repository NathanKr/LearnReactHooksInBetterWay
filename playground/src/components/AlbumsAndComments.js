import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

const AlbumsAndComments = () => {
  const [resource, setResource] = useState("albums");
  const [resources,setResources] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/${resource}`;

  const fetchResources = () => {
    axios
      .get(url)
      .then(response => {
        setResources(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchResources,[resource]);

  const elements = (
    <ul>
      {resources.map((res,index) => (
        <li key={index}>{resource === "albums" ? res.title : res.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <Button primary onClick={() => setResource("albums")}>
        Albums
      </Button>
      <Button primary onClick={() => setResource("comments")}>
        Comments
      </Button>
      {elements}
    </div>
  );
};

export default AlbumsAndComments;
