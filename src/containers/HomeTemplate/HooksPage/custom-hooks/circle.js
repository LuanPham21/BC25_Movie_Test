import React from "react";
import { useMagicColor } from "./useMagicColor";
import "./style.css";

export default function Circle() {
  const color = useMagicColor();
  return (
    <div className="circle" style={{ backgroundColor: color }}>
      Circle
    </div>
  );
}
