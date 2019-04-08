import React , {useState} from "react";
import { Switch, Route } from "react-router-dom";
import ChatApp from "./ChatApp";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import UserContext from "../context/UserContext";

const Root = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
        <Route exact path="/" component={ChatApp} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    </UserContext.Provider>
  );
};

export default Root;
