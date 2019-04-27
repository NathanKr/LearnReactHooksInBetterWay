import React from "react";
import useEmailLocalStorage from "../customHooks/useEmailLocalStorage";

const LocalStorageSample = () => {
  const initialEmail = "natankrasney@gmail.com"; // -- relevent only at first
  const [email, setEmail] = useEmailLocalStorage(initialEmail);

  return (
    <div>
      <button onClick={() => setEmail("natankrasney1@gmail.com")}>
        Set Email1
      </button>
      <button onClick={() => setEmail("natankrasney2@gmail.com")}>
        Set Email2
      </button>
      <button onClick={() => window.location.reload(true)}>Refresh Page</button>
      <p>email is : {email}</p>
    </div>
  );
};

export default LocalStorageSample;
