import React, { useState, useEffect, useCallback, useMemo } from "react";
import Cart from "./cart";
import Child from "./child";
import CustomHooks from "./custom-hooks";
import DemoUseReducer from "./demoUseReducer";

export default function HooksPage() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);

  const listCart = [
    { id: 1, productName: "Samsung" },
    { id: 2, productName: "Iphone" },
  ];

  const listCartMemo = useMemo(() => listCart, []);
  useEffect(() => {
    console.log("userEffect - tuong duong componentDidmount ben class");
  }, []);
  useEffect(() => {
    console.log("userEffect - tuong duong componentDidUpdate ben class");
  }, [number]);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hello cyber soft");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderNoti = () => {
    return `So like la ${like}`;
  };
  const renderNotiCallback = useCallback(renderNoti, [like]);
  return (
    <div>
      <h1>HooksPage</h1>
      <h3>Numbe : {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Click
      </button>
      <div>
        <h3>Like : {like}</h3>
        <button
          className="btn btn-primary"
          onClick={() => {
            setLike(like + 1);
          }}
        >
          Like
        </button>
      </div>
      <br />
      <Child renderNoti={renderNotiCallback} />
      <br />
      <Cart listCart={listCartMemo} />
      <br />
      <DemoUseReducer />
      <br />
      <CustomHooks />
    </div>
  );
}
