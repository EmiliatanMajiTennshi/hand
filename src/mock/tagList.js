import Mock from "mockjs";

Mock.setup({
  timeout: 500,
});

export default Mock.mock("/getTagList", "get", [
  "全部分类",
  "开放平台",
  "项目管理",
  "开发者",
  "猪齿鱼",
  "海马汇",
]);
