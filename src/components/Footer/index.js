import React from "react";
import { Pagination } from "antd";
import "./index.css";

export default function Footer() {
  return (
    <div className="footer">
      <Pagination size="small" total={50} style={{ float: "right" }} />
    </div>
  );
}
