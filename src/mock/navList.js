import Mock from "mockjs";

Mock.setup({
  timeout: 500,
});
export default Mock.mock("/getNavList", "get", [
  "全部产品",
  "飞搭Feida",
  "汉得协同制造软件",
  "汉得智能合同管理软件",
  "虹珊瑚（Corallium）",
  "汉得运输管理软件",
  "汉得智慧财务套件软件",
  "汉得运输管理软件",
  "汉得清分结算软件",
  "海马汇HIPPIUS",
]);
