import React from "react";
import Level2 from "./Level2";
import UserContext from '../context/UserContext'

const Level1 = () => {
  const user = { name: "Nathan Krasney", email: "natankrasney@gmail.com" };
  return (
    <div>
      <UserContext.Provider value={user}>
      <h2>Level1</h2>
      <Level2/>
      </UserContext.Provider>
    </div>
  );
};

export default Level1;
