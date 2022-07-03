import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actLogin } from "./reducer/action";
import { useNavigate, Navigate } from "react-router-dom";

export default function AuthPage() {
  const prop = useSelector((state) => state.LoginAuthReducer);
  console.log(prop);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLogin(state, navigate));
  };

  if (localStorage.getItem("UserAdmin")) {
    return <Navigate to="/admin" replace />;
  }

  const renderNoti = () => {
    const { error } = prop;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };
  if (prop.loading) return <div className="text-center">...Loading</div>;

  return (
    <div className="container">
      <h1 className="text-center">AuthPage</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          {renderNoti()}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="matKhau"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
