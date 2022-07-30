import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import List from "./components/List";
import Result from "./components/Result";

import "./mock/videoData";
import "./mock/navList";
import "./mock/tagList";
import "./App.css";

import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";

export default function App() {
  const [flag, setFlag] = useState(0);
  const [videoData, setVideoData] = useState([]);
  const [keyword, setKeyword] = useState("123");
  const [navList, setNavList] = useState([]);
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    axios.get("/getVideoData").then((res) => {
      setFlag(1);
      setVideoData(res.data.array);
    });
    axios.get("/getNavList").then((res) => {
      setNavList(res.data);
    });
    axios.get("/getTagList").then((res) => {
      setTagList(res.data);
    });
  }, []);

  const handleSearch = () => {
    console.log(keyword);
  };
  return (
    <div>
      <Header />
      <Search
        keyword={keyword}
        setKeyword={setKeyword}
        handleSearch={handleSearch}
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
        <Route path="/result" element={<Result />} />
        <Route path="/" element={<Navigate to="/list" />} />
      </Routes>
    </div>
  );
}
