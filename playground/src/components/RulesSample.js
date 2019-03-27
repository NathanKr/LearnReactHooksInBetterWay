import React, { useState, useEffect } from "react";

const RulesSample = () => {
  const [importance, setImportance] = useState("low");
  useEffect(() => {
    if (importance === "high") {
      console.log(idea);
    }
  });
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState([]);

  const elements = (
    <ul>
      {ideas.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <input
        onChange={evt => setIdea(evt.target.value)}
        placeholder="insert idea"
      />
      <br />
      <select onChange={evt => setImportance(evt.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <br />
      <button
        onClick={() => {
          let newIdeas = [...ideas];
          newIdeas.push(idea);
          setIdeas(newIdeas);
        }}
      >
        Add idea
      </button>
      {elements}
    </div>
  );
};

export default RulesSample;
