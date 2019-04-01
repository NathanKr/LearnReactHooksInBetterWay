import React from "react";
import "./ChatPanel.css";
import firebase from "../logic/firebase";

const ChatPanel = () => {
  const messagesRefFirebase = firebase.database().ref("messages");

  return (
    <div className="ChatPanel">
      <div>room1</div>
      <div style={{ flexGrow: 1 }}>
        <ul>
          <li>message 1</li>
          <li>message 2</li>
          <li>message 3</li>
          <li>message 4</li>
        </ul>
      </div>
      <div style={{ display: "flex" }}>
        <input style={{ flexGrow: 1 }} placeholder="insert message ..." />
        <button
          onClick={() =>
            messagesRefFirebase
              .child("id2")
              .set({ text: "some text 2" })
              .then(msg => console.log(`set success : ${msg}`))
              .catch(err => console.log(`set error : ${err} `))
          }
        >
          SendMessage
        </button>
      </div>
    </div>
  );
};

export default ChatPanel;
