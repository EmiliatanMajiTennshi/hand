import React from "react";
import "./index.css";
import imgUnfold from "../../assets/展开.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo" onClick={() => navigate("/list")}></div>
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
        <div>搜索</div>
        <div>提醒</div>
        <div>用户</div>
      </div>
    </div>
  );
}
