import React from "react";
import Nhanvien from "./nhanvien";
import Sanpham from "./sanpham";
import Withcard from "./with-card";

const WapperCard = Withcard(Nhanvien);

export default function HocPage() {
  return (
    <div>
      <h1>*HocPage</h1>
      <br />
      <WapperCard />
    </div>
  );
}
