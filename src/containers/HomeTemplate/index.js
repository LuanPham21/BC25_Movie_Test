import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./_components/Navbar";

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }
}
