import Mock from "mockjs";
import { Random } from "mockjs";

Mock.setup({
  timeout: 500,
});
export default Mock.mock("/getVideoData", "get", {
  "array|7-9": [
    {
      title: "@ctitle(8,13)",
      description: "@csentence",
      email: "@email",
      "id|+1": 1,
      image: Random.image("290x163", Random.color(), Random.color(), "Mock.js"),
      "viewCount|314-21313": 2456,
      "lessonCount|4-15": 5,
    },
  ],
});
