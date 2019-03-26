import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import Albums1 from "./Albums1";
import Comments1 from "./Comments1";

const AlbumsAndCommentsRefactor1 = () => {
  const [resource, setResource] = useState("albums");

  return (
    <div>
      <Button primary onClick={() => setResource("albums")}>
        Albums
      </Button>
      <Button primary onClick={() => setResource("comments")}>
        Comments
      </Button>
      {resource === "albums" ? (
        <Albums1 resource={resource} />
      ) : (
        <Comments1 resource={resource} />
      )}
    </div>
  );
};

export default AlbumsAndCommentsRefactor1;
