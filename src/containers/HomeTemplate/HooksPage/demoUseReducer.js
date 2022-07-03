import React, { useReducer } from "react";

const initailState = {
  number: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement": {
      return { number: state.number - 1 };
    }
    case "increment": {
      return { number: state.number + 1 };
    }
    default:
      break;
  }
};

export default function DemoUseReducer() {
  const [state, dispatch] = useReducer(reducer, initailState);

  return (
    <div>
      <h3>*Demo useReducer</h3>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type: "decrement",
          });
        }}
      >
        -
      </button>
      <span className="ml-2 mr-2">Number : {state.number}</span>
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
