import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Search(props) {
  const { keyword, setKeyword, handleSearch, setKeywordCopy } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    setKeywordCopy(keyword);
    handleSearch();
    navigate("/result");
  };
  const handleKeyUp = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      handleClick();
    }
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
          onKeyUp={handleKeyUp}
        />
        <button className="btn-search" onClick={handleClick}>
          搜 索
        </button>
      </div>
    </div>
  );
}
