import React, { useState, useEffect } from "react";
import axios from 'axios'

const Albums1 = ({ resource }) => {
  const [resources, setResources] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/${resource}`;

  const fetchResources = () => {
    axios
      .get(url)
      .then(response => {
        setResources(response.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(fetchResources, [resource]);

  const elements = (
    <ul>
      {resources.map((res, index) => (
        <li key={index}>{res.title}</li>
      ))}
    </ul>
  );

  return (<div>
      <h2>Albums</h2>
      {elements}
      </div>);
};

export default Albums1;
