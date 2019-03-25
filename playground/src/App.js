import React, { useState } from "react";
import { Flag , Segment } from "semantic-ui-react";
import Level1 from "./Level1";
import { LanguageContext } from "./LanguageContext";

const App = () => {
  const [language, setLanguage] = useState("english");

  const langObj = { language };
  return (
    <div style={{ margin: "10px" }}>
    <Segment>
      <Flag onClick={() => setLanguage("english")} name="us" />
      <Flag onClick={() => setLanguage("portuguese")} name="br" />
      </Segment>
      <LanguageContext.Provider value={langObj}>
        <Level1 />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
