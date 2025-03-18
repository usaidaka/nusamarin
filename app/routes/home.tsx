import type { Route } from "./+types/home";
import classes from "../styles/pages/home.module.scss";
import Hero from "~/components/home/hero";
import Slogan from "../components/home/slogan";
import Feature from "~/components/home/feature";
import Goals from "~/components/home/goals";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const home = () => {
  return (
    <div className={classes.main}>
      <Hero />
      <Slogan />
      <Feature />
      <Goals />
    </div>
  );
};

export default home;
