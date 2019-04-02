import React from "react";
import "./SendMessage.css";

/*
text
id (of the message , unique id)
user (some unique id)
current room (some unique id)
*/


const SendMessage = ({ messagesRefFirebase }) => {
  return (
    <div className="SendMessage">
      <input placeholder="insert message ..." />
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
  );
};

export default SendMessage;
