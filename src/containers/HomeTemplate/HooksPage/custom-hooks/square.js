import React from "react";
import { useMagicColor } from "./useMagicColor";
import "./style.css";

export default function Square() {
  const color = useMagicColor();
  return (
    <div className="square" style={{ backgroundColor: color }}>
      Square
    </div>
  );
}
