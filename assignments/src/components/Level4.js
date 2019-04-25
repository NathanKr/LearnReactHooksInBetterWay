import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Level4 = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <h2>Level4</h2>
      <h4>user name : {user.name}</h4>
    </div>
  );
};

export default Level4;
