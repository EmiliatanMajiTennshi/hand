import React, { useState } from "react";
import "./index.css";

export default function List(props) {
  const { flag, videoData, navList, tagList } = props;
  const [currentNavIndex, setCurrentNavIndex] = useState(0);
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  return (
    <div className="list">
      <div className="list-menu">
        <ul>
          {navList.map((item, index) => {
            return (
              <li
                key={index}
                className={index === currentNavIndex ? "nav-is-active" : ""}
                onClick={() => setCurrentNavIndex(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="video-list">
        <div className="video-nav">
          <span className="nav-title">视频分类</span>
          <div className="nav-items">
            {tagList.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    setCurrentTagIndex(index);
                  }}
                  className={index === currentTagIndex ? "tag-is-active" : ""}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="videos">
          {flag === 0 ? (
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <ul>
              {videoData.map((item) => {
                return (
                  <li key={item.id} className="video-item">
                    <div className="item-img">
                      <img src={item.image} alt=""></img>
                    </div>

                    <div className="item-footer">
                      <div className="item-description">
                        <span className="item-title">{item.title}</span>
                        <span className="item-content">{item.description}</span>
                      </div>
                      <div className="view-count">
                        <span className="current-count">
                          {item.viewCount}次播放
                        </span>
                        <span className="video-count">
                          {item.lessonCount}节
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
