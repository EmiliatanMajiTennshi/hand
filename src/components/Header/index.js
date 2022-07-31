import React from "react";
import "./index.css";
import imgUnfold from "../../assets/展开.svg";
import { useNavigate } from "react-router-dom";
import search from "../../assets/Group 10.svg";
import report from "../../assets/通知.svg";
import head from "../../assets/头像@2x.png";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-left">
        <div
          className="logo"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/list")}
        ></div>
        <div className="menu">
          <span>应用市场</span>
          <span>
            开发者
            <i>
              <img className="img-unfold" src={imgUnfold} alt="img-unfold" />
            </i>
          </span>
          <span>
            社区合作伙伴
            <i>
              <img className="img-unfold" src={imgUnfold} alt="img-unfold" />
            </i>
          </span>
          <span>
            支持与服务
            <i>
              <img className="img-unfold" src={imgUnfold} alt="img-unfold" />
            </i>
          </span>
          <span>
            运营与管理
            <i>
              <img className="img-unfold" src={imgUnfold} alt="img-unfold" />
            </i>
          </span>
        </div>
      </div>
      <div className="header-right">
        <div className="left-img">
          <img src={search} alt=""></img>
          <img src={report} alt=""></img>
          <span>控制台</span>
        </div>
        <div className="right-img">
          <img src={head} alt="" />
          <span>wyl.xyz</span>
          <img src={imgUnfold} className="img-unfold" alt="" />
        </div>
      </div>
    </div>
  );
}
