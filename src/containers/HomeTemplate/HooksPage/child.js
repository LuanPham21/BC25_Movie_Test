import React, { memo } from "react";

function Child(props) {
  console.log("Child");
  return (
    <div>
      <h1>Child</h1>
      <h3>{props.renderNoti()}</h3>
    </div>
  );
}
export default memo(Child);
