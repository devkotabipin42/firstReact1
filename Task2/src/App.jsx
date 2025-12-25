import React from "react";
import Card from "./components/Card";

const App = () => {
  const users = [
    {
      fullName: "Alex Johnson",
      description: "Frontend developer passionate about React and UI design.",
      profile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
      coverImage:
        "https://images.unsplash.com/photo-1503264116251-35a269479413",
      likesCount: 1240,
      postCount: 86,
      viewsCount: 45200,
      followed: true,
    },
    {
      fullName: "Sophia Williams",
      description: "Creative designer sharing daily design inspiration.",
      profile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
      coverImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      likesCount: 980,
      postCount: 64,
      viewsCount: 38900,
      followed: false,
    },
    {
      fullName: "Daniel Smith",
      description: "Full-stack engineer | JavaScript | Node.js | MongoDB",
      profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      coverImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      likesCount: 1560,
      postCount: 102,
      viewsCount: 62300,
      followed: true,
    },
    {
      fullName: "Emma Brown",
      description: "Content creator & tech educator,Backend developer.",
      profile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      coverImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      likesCount: 2110,
      postCount: 140,
      viewsCount: 90500,
      followed: true,
    },
    {
      fullName: "Michael Lee",
      description: "Backend developer focused on scalable systems.",
      profile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      coverImage:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
      likesCount: 870,
      postCount: 58,
      viewsCount: 27400,
      followed: false,
    },
    {
      fullName: "Olivia Martinez",
      description: "UI/UX designer crafting delightful user experiences.",
      profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      coverImage:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      likesCount: 1930,
      postCount: 97,
      viewsCount: 74200,
      followed: true,
    },
    {
      fullName: "James Anderson",
      description: "Tech blogger | Web performance & best practices.",
      profile: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
      coverImage:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      likesCount: 660,
      postCount: 44,
      viewsCount: 19800,
      followed: false,
    },
    {
      fullName: "Ava Thompson",
      description: "React Native developer building mobile experiences.",
      profile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      coverImage:
        "https://images.unsplash.com/photo-1506765515384-028b60a970df",
      likesCount: 1420,
      postCount: 88,
      viewsCount: 51300,
      followed: true,
    },
    {
      fullName: "William Garcia",
      description: "Cloud & DevOps enthusiast and Frontend Developer.",
      profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      coverImage:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      likesCount: 540,
      postCount: 36,
      viewsCount: 16700,
      followed: false,
    },
    {
      fullName: "Isabella Clark",
      description: "Digital storyteller & social media strategist.",
      profile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      coverImage:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      likesCount: 2680,
      postCount: 165,
      viewsCount: 112000,
      followed: true,
    },
  ];

  return (
    <div className="flex flex-wrap">
      {users.map((user, index) => {
        return <Card key={index} elem={user} />;
      })}
    </div>
  );
};

export default App;
