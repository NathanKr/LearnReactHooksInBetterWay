import React, { useState } from "react";
import SidePanel from "./SidePanel/SidePanel";
import ChatPanel from "./ChatPanel/ChatPanel";
import "./ChatApp.css";
import CurrentRoomContext from "../context/CurrentRoomContext";
import UserContext from "../context/UserContext";

const ChatApp = () => {
  const [user, setUser] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);

  return (
    <div className="ChatApp">
      <UserContext.Provider value={{ user, setUser }}>
        <CurrentRoomContext.Provider value={{ currentRoom, setCurrentRoom }}>
          <SidePanel />
          <ChatPanel />
        </CurrentRoomContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ChatApp;
