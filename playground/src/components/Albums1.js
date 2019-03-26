import React from "react";
import { useFetchResources } from "../customHooks/useFetchResources";

const Albums1 = ({ resource }) => {

  const resources = useFetchResources(resource);

  const elements = (
    <ul>
      {resources.map((res, index) => (
        <li key={index}>{res.title}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>Albums ! </h2>
      {elements}
    </div>
  );
};

export default Albums1;
