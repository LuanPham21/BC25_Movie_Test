import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "my-active nav-link" : "nav-link"
                  }
                  to="/admin"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "my-active nav-link" : "nav-link"
                  }
                  to="/admin/dashboard"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "my-active nav-link" : "nav-link"
                  }
                  to="/admin/add-user"
                >
                  Add User
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "my-active nav-link" : "nav-link"
                  }
                  to="/admin/add-movie"
                >
                  Add Movie
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
