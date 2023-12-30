"use client";

import { Button, Card } from "antd";
import "./card_css.css";

const MyCard: React.FC<{
  title: string;
  desc: string;
  url: string;
}> = ({ title, desc, url }) => (
  <Card
    className="my-card"
    style={{ width: 300 }}
    title={<h3 className="my-card-title">{title}</h3>}
    onClick={() => {
      open(url);
    }}
  >
    {desc}
  </Card>
);

export default function Home() {
  return (
    <div>
      <h1>博客</h1>
      <span>
        JavaScript基础：https://developer.mozilla.org/zh-CN/docs/learn/JavaScript
      </span>
      <p>video: https://www.youtube.com/watch?v=88QJumITbQA</p>
      <p>react框架：https://react.docschina.org/learn</p>
      <p>
        nextjs:
        https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs
      </p>
      <p>组件库：https://ant.design/components/overview-cn</p>
      <p>网站模板：https://pro.ant.design/zh-CN/docs/getting-started/</p>
      <span>启动项目，vscode，打开终端，输入npm run dev</span>
      <br />
      <MyButton />
      <MyCard
        title="JavaScript基础"
        desc="从MDN官网获取有关JavaScript的详细信息"
        url="https://developer.mozilla.org/zh-CN/docs/learn/JavaScript"
      />
    </div>
  );
}

function MyButton() {
  return (
    <Button onClick={() => alert("你好，江慧~")} type="primary">
      Im a button
    </Button>
  );
}
