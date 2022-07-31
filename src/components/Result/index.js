import React, { useState, useEffect } from "react";
import "./index.css";
import { Pagination } from 'antd'

export default function Result(props) {
  const { keywordCopy, searchedList } = props;
  const [currentResult, setCurrentResult] = useState([]);
  useEffect(() => {
    setCurrentResult(searchedList.slice(0, 9))
  }, [currentResult, searchedList])

  const changePage = (key) => {
    setCurrentResult(searchedList.slice((key - 1) * 5, 5 * key))
  }
  return (
    <div className="result">
      <div className="summary">
        共找到 <span>{searchedList.length}</span> 个“<span>{keywordCopy}</span>
        ”相关视频
      </div>
      <div className="result-list">
        <ul>
          {currentResult.map((item) => {
            return (
              <li className="result-item" key={item.id}>
                <div className="result-img">
                  <img src={item.image} alt="" />
                  <div className="result-view-count">
                    {item.viewCount}次播放
                  </div>
                </div>
                <div className="result-info">
                  <div className="result-title">
                    {item.title}
                    <span className="lesson-count">{item.lessonCount}节</span>
                  </div>
                  <div className="result-tag">
                    <span>Hzero企业版</span>
                    <span>赋能培训</span>
                  </div>
                  <div className="result-description">{item.description}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer">
        <Pagination size="small" total={searchedList.length} pageSize={5} style={{ float: "right" }} onChange={(key) => changePage(key)} />
      </div>
    </div>
  );
}
