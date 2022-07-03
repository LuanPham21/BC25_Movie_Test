import React from "react";

export default function Nhanvien() {
  return (
    <>
      <div className="form-group">
        <label>Ma NV</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Ten NV</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" />
      </div>
    </>
  );
}
