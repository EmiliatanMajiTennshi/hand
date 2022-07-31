import React, { useState, useEffect } from "react";
import { Pagination } from 'antd'
import "./index.css";

export default function List(props) {
  const { flag, videoData, navList, tagList } = props;
  const [currentNavIndex, setCurrentNavIndex] = useState(0);
  const [currentTagIndex, setCurrentTagIndex] = useState(0);
  const [topDistance, setTopDistance] = useState(0);
  const [currentVideos, setCurrentVideos] = useState([])
  const scrollChange = () => {
    // 监听滚动条距离顶部距离
    setTopDistance(document.documentElement.scrollTop)
  }

  useEffect(() => {
    setCurrentVideos(videoData.slice(0, 9))
    // 滚动条滚动时触发
    window.addEventListener('scroll', scrollChange, true)
    scrollChange()
    return () => {
      window.removeEventListener('scroll', scrollChange, false)
    }
  }, [videoData])

  const changePage = (key) => {
    setCurrentVideos(videoData.slice((key - 1) * 9, 9 * key))
  }
  return (
    <div>
      <div className="list">
        <div className="list-menu" >
          <ul className={topDistance >= 243 ? 'fixed-nav' : ''}>
            {navList.map((item, index) => {
              // navList
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
                  {currentVideos.map((item) => {
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
      <div className="footer">
        <Pagination size="small" total={videoData.length} pageSize={9} style={{ float: "right" }} onChange={(key) => changePage(key)} />
      </div></div>
  );
}
