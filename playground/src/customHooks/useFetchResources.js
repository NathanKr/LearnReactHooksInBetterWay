import{ useState, useEffect } from "react";
import axios from 'axios'

export const useFetchResources = resource => {
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

  return resources;
};
