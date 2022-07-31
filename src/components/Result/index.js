import React from "react";
import "./index.css";

export default function Result(props) {
  const { keywordCopy, searchedList } = props;
  console.log(searchedList);
  return (
    <div className="result">
      <div className="summary">
        共找到 <span>{searchedList.length}</span> 个“<span>{keywordCopy}</span>
        ”相关视频
      </div>
      <div className="result-list">
        <ul>
          {searchedList.map((item) => {
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
    </div>
  );
}
