import React from "react";
import "./index.css";
import loading from "../../assets/Loading.jpg";
export default function Result() {
  return (
    <div className="result">
      <div className="summary">
        共找到 <span>800</span> 个“<span>2020</span>”相关视频
      </div>
      <div className="result-list">
        <ul>
          <li className="result-item">
            <div className="result-img">
              <img src={loading} alt="" />
              <div className="result-view-count">1286次播放</div>
            </div>
            <div className="result-info">
              <div className="result-title">
                2020 前端技术的趋势<span className="lesson-count">12节</span>
              </div>
              <div className="result-tag">
                <span>Hzero企业版</span>
                <span>赋能培训</span>
              </div>
              <div className="result-description">
                ZERO技术中台，结合了汉得多年的项目实施经验，抽象、封装的大量的标准服务及功能，以帮助企业产品研发、项目实施更加高效便捷，避免大量重复造轮子所带来的成本浪费。平台主要包含业务中台、数据中台和技术中台，目标是搭建一个可支持各种产品快速组建、开发的融合平台。
              </div>
            </div>
          </li>
          <li className="result-item">
            <div className="result-img">
              <img src={loading} alt="" />
              <div className="result-view-count">1286次播放</div>
            </div>
            <div className="result-info">
              <div className="result-title">
                2020 前端技术的趋势<span className="lesson-count">12节</span>
              </div>
              <div className="result-tag">
                <span>Hzero企业版</span>
                <span>赋能培训</span>
              </div>
              <div className="result-description">
                ZERO技术中台，结合了汉得多年的项目实施经验，抽象、封装的大量的标准服务及功能，以帮助企业产品研发、项目实施更加高效便捷，避免大量重复造轮子所带来的成本浪费。平台主要包含业务中台、数据中台和技术中台，目标是搭建一个可支持各种产品快速组建、开发的融合平台。
              </div>
            </div>
          </li>
          <li className="result-item">
            <div className="result-img">
              <img src={loading} alt="" />
              <div className="result-view-count">1286次播放</div>
            </div>
            <div className="result-info">
              <div className="result-title">
                2020 前端技术的趋势<span className="lesson-count">12节</span>
              </div>
              <div className="result-tag">
                <span>Hzero企业版</span>
                <span>赋能培训</span>
              </div>
              <div className="result-description">
                ZERO技术中台，结合了汉得多年的项目实施经验，抽象、封装的大量的标准服务及功能，以帮助企业产品研发、项目实施更加高效便捷，避免大量重复造轮子所带来的成本浪费。平台主要包含业务中台、数据中台和技术中台，目标是搭建一个可支持各种产品快速组建、开发的融合平台。
              </div>
            </div>
          </li>
          <li className="result-item">
            <div className="result-img">
              <img src={loading} alt="" />
              <div className="result-view-count">1286次播放</div>
            </div>
            <div className="result-info">
              <div className="result-title">
                2020 前端技术的趋势<span className="lesson-count">12节</span>
              </div>
              <div className="result-tag">
                <span>Hzero企业版</span>
                <span>赋能培训</span>
              </div>
              <div className="result-description">
                ZERO技术中台，结合了汉得多年的项目实施经验，抽象、封装的大量的标准服务及功能，以帮助企业产品研发、项目实施更加高效便捷，避免大量重复造轮子所带来的成本浪费。平台主要包含业务中台、数据中台和技术中台，目标是搭建一个可支持各种产品快速组建、开发的融合平台。
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
