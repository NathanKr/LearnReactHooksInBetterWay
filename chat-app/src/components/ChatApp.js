import React, { useState } from "react";
import SidePanel from "./SidePanel/SidePanel";
import ChatPanel from "./ChatPanel/ChatPanel";
import "./ChatApp.css";
import CurrentRoomContext from "../context/CurrentRoomContext";
import UserContext from "../context/UserContext";

const ChatApp = () => {
  // --- todo use null after user login
  const [user, setUser] = useState({
    displayName: "Nathan",
    photoURL: "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584__340.png",
    uid: "id nathan"
  });

  
  const [currentRoom, setCurrentRoom] = useState(null);

  return (
    <div className="ChatApp">
      <UserContext.Provider value={{ user, setUser }}>
        <CurrentRoomContext.Provider value={{ currentRoom, setCurrentRoom }}>
          <SidePanel />
          {currentRoom ? <ChatPanel /> : <h3>Please choose a chat room</h3>}
        </CurrentRoomContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ChatApp;
