import React  from "react";
import { useFetchResources } from "../customHooks/useFetchResources";

const Comments1 = ({resource}) => {

const resources = useFetchResources(resource);

  const elements = (
    <ul>
      {resources.map((res, index) => (
        <li key={index}>{res.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>comments !</h2>
      {elements}
    </div>
  );
};

export default Comments1;
