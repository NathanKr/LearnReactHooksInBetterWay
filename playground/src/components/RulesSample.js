import React, { useState, useEffect } from "react";
import { Button, Input, Dropdown, DropdownItem, Form } from "semantic-ui-react";

const RulesSample = () => {
  const [importance, setImportance] = useState("");
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
        <li style={{ color: item.color }} key={index}>
          {item.text}
        </li>
      ))}
    </ul>
  );

  const getColor = value => {
    switch (value) {
      case "low":
        return "blue";

      case "medium":
        return "orange";

      case "high":
        return "red";

      default:
        return "";
    }
  };

  const importances = [
    { text: "Low", value: "low" },
    { text: "Medium", value: "medium" },
    { text: "High", value: "high" }
  ];

  return (
    <div>
      <Form>
        <Form.Field>
          <Dropdown selection text="Select importance">
            <Dropdown.Menu>
              {importances.map((it, index) => (
                <DropdownItem
                  text={it.text}
                  value={it.value}
                  key={index}
                  onClick={() => setImportance(it.value)}
                  style={{ color: getColor(it.value) }}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Field>
        <Form.Field>
          <Input
            onChange={evt => setIdea(evt.target.value)}
            placeholder="insert idea"
            value={idea}
          />
        </Form.Field>
        <Form.Field>
          <Button
            disabled={!importance || !idea}
            primary
            onClick={() => {
              let newIdeas = [...ideas];
              newIdeas.push({ text: idea, color: getColor(importance) });
              setIdeas(newIdeas);
              setIdea("");
              setImportance("");
            }}
          >
            Add idea
          </Button>
        </Form.Field>
      </Form>
      {elements}
    </div>
  );
};

export default RulesSample;
