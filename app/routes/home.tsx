import type { Route } from "./+types/home";
import classes from "../styles/pages/home.module.scss";
import Hero from "~/components/home/hero";
import Slogan from "../components/home/slogan";
import Feature from "~/components/home/feature";
import Goals from "~/components/home/goals";
import Tagline from "~/components/home/tagline";
import ArticleCard from "~/components/home/articleCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const home = () => {
  const articles = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Technology",
      title: "The Future of AI in Everyday Life",
      caption: "Exploring how AI is shaping our daily routines and industries.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Health",
      title: "10 Tips for a Healthier Lifestyle",
      caption: "Simple yet effective ways to improve your overall well-being.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1661277816311-28cced31f998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Business",
      title: "How Startups Can Thrive in 2025",
      caption:
        "Key strategies for startups to succeed in a competitive market.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Science",
      title: "The Latest Discoveries in Space Exploration",
      caption:
        "New findings that are expanding our understanding of the universe.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Finance",
      title: "Investing in 2025: What You Need to Know",
      caption: "Expert insights on navigating the financial markets.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Lifestyle",
      title: "Minimalism: Living with Less",
      caption: "How to simplify your life and focus on what truly matters.",
    },
  ];

  return (
    <div className={classes.main}>
      <Hero />
      <Slogan />
      <Feature />
      <Goals />
      <Tagline />
      <ArticleCard articles={articles} />
    </div>
  );
};

export default home;
