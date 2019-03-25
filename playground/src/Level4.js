import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { LanguageContext } from "./LanguageContext";

const Level4 = () => {
  const value = useContext(LanguageContext);

  return (
    <div>
      Level4
      <br />
      <Button secondary>{value.language === 'english' ? 'Click' : 'Clique' }</Button>
    </div>
  );
};

export default Level4;
