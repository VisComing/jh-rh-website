"use client";

import { Button, Card } from "antd";

const MyCard: React.FC<{
  title: string;
  desc: string;
  url?: string;
}> = ({ title, desc, url }) => (
  <Card
    style={{ width: 300 }}
    title={<h3>{title}</h3>}
    onClick={() => {
      Boolean(url) && open(url);
    }}
  >
    {desc}
  </Card>
);

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-10 ml-10">
      <MyCard
        title="JavaScript基础"
        desc="从MDN官网获取有关JavaScript的详细信息"
        url="https://developer.mozilla.org/zh-CN/docs/learn/JavaScript"
      />
      <MyCard
        title="前端视频教程"
        desc="从YouTube获取最优秀的视频内容"
        url="https://www.youtube.com/watch?v=88QJumITbQA"
      />
      <MyCard
        title="React框架"
        desc="从react.dev官网获取最新最易懂的教程"
        url="https://react.docschina.org/learn"
      />
      <MyCard
        title="Next.js"
        desc="从netx官网学习目前最流行的react框架"
        url="https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs"
      />
      <MyCard
        title="Ant design"
        desc="从ant design官网学习组件库"
        url="https://ant.design/components/overview-cn"
      />
      <MyCard title="如何启动项目" desc="vscode，打开终端，输入npm run dev" />
    </div>
  );
}
