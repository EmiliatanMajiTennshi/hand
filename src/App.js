import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import Result from "./components/Result";


import "./mock/videoData";
import "./mock/navList";
import "./mock/tagList";
import "./App.css";

export default function App() {
  const [flag, setFlag] = useState(0);
  const [videoData, setVideoData] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordCopy, setKeywordCopy] = useState("");
  const [navList, setNavList] = useState([]);
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    // 获取视频数据
    axios.get("/getVideoData").then((res) => {
      setFlag(1);
      setVideoData(res.data.array);
    });

    // 获取视频导航
    axios.get("/getNavList").then((res) => {
      setNavList(res.data);
    });

    //获取标签
    axios.get("/getTagList").then((res) => {
      setTagList(res.data);
    });
  }, []);

  // 搜索事件
  const handleSearch = () => {
    let resultList = videoData.filter((item) => {
      return (
        item.title.search(keyword) !== -1 ||
        item.description.search(keyword) !== -1
      );
    });
    setSearchedList(resultList);
  };

  return (
    <div>
      <Header />
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
        setKeywordCopy={setKeywordCopy}
      />
      <Routes>
        <Route
          path="/list"
          element={
            <List
              flag={flag}
              videoData={videoData}
              navList={navList}
              tagList={tagList}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result keywordCopy={keywordCopy} searchedList={searchedList} />
          }
        />
        <Route path="/" element={<Navigate to="/list" />} />
      </Routes>
    </div>
  );
}
