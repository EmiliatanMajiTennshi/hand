import React from "react";
import "./index.css";

import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const { setKeyword, handleSearch } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    handleSearch();
    navigate("/result");
  };
  return (
    <div className="banner">
      <div className="title">视频中心</div>
      <p className="description">帮您快速了解汉得产品，助力交付使用全流程</p>
      <div className="search-container">
        <input
          className="input-search"
          type="text"
          placeholder="请搜索类别/视频名称"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button className="btn-search" onClick={handleClick}>
          搜 索
        </button>
      </div>
    </div>
  );
}
