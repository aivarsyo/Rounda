import React from "react";
import { connect } from "frontity";

const Empty = ({ href, actions, children }) => {
  return (
    <>
      <div className="empty"></div>
    </>
  );
};

export default connect(Empty);
